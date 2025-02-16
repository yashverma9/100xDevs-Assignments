import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
    validateSigninInput,
    validateSignupInput,
} from "../middleware/validate";
import { Jwt } from "hono/utils/jwt";
import { JWTPayload } from "hono/utils/jwt/types";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    };
    Variables: {
        userId: string;
        prisma: JWTPayload;
    };
}>();

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTAUTH = 401,
    INTSERERR = 500,
}

// Middleware to create a common prisma client, unable to use due to ts issues

// userRouter.use("*", async (c, next) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());

//     c.set("prisma", prisma);
//     await next();
// });

userRouter.post("/signup", validateSignupInput, async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const body = await c.req.json();
        const resp = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name,
            },
        });

        const token = await Jwt.sign({ userId: resp.id }, c.env.JWT_SECRET);
        return c.json({ msg: "Successfully sign up!", token: token });
    } catch (e) {
        console.error(`Error processing creating ${e}`);
        c.status(StatusCode.INTSERERR);
        return c.text(`${e}`);
    }
});

userRouter.post("/signin", validateSigninInput, async (c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const { email, password } = await c.req.json();

        const user = await prisma.user.findFirst({
            where: { email, password },
        });

        if (user !== null) {
            const token = await Jwt.sign({ userId: user.id }, c.env.JWT_SECRET);
            return c.json({ msg: "Successfully signed im!", token: token });
        } else return c.json({ msg: "Invalid credential" });
    } catch (e) {
        console.error(`Error processing creating ${e}`);
        c.status(StatusCode.INTSERERR);
        return c.text(`${e}`);
    }
});

export default userRouter;
