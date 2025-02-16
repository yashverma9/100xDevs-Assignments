import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {
    validatePostFetchInput,
    validatePostInput,
    validatePostUpdateInput,
    validateToken,
} from "../middleware/validate";
import { JWTPayload } from "hono/utils/jwt/types";

const blogRouter = new Hono<{
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

blogRouter.use("/*", validateToken);

// Middleware to create a common prisma client, unable to use due to ts issues

// blogRouter.use("*", async (c, next) => {
//     const prisma = new PrismaClient({
//         datasourceUrl: c.env.DATABASE_URL,
//     }).$extends(withAccelerate());

//     c.set("prisma", prisma);
//     await next();
// });

blogRouter.post("/", validatePostInput, async (c: any) => {
    try {
        const authorId = c.get("userId");
        const { title, content } = await c.req.json();

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const resp = await prisma.post.create({
            data: {
                authorId,
                title,
                content,
            },
        });
        if (resp)
            return c.json({
                msg: "Success",
                post: resp,
            });
        else return c.json({ msg: "Failed creation" });
    } catch (e) {
        c.status(StatusCode.INTSERERR);
        return c.json({ msg: `Error processing ${e}` });
    }
});

blogRouter.put("/", validatePostUpdateInput, async (c: any) => {
    try {
        const authorId = c.get("userId");
        const { id, title, content } = await c.req.json();

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const resp = await prisma.post.update({
            where: { id, authorId },
            data: {
                title,
                content,
            },
        });

        if (resp)
            return c.json({
                msg: "Success",
                post: resp,
            });
        else return c.json({ msg: "Failed updation" });
    } catch (e) {
        c.status(StatusCode.INTSERERR);
        return c.json({ msg: `Error processing ${e}` });
    }
});

blogRouter.get("/byId/:id", validatePostFetchInput, async (c: any) => {
    try {
        const id = c.req.param("id");

        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const resp = await prisma.post.findFirst({
            where: { id },
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        if (resp) return c.json({ msg: "Success", blog: resp });
        else return c.text("Blog doesn't exist");
    } catch (err) {
        c.status(StatusCode.INTSERERR);
        c.text(`Error fetching blog ${err}`);
    }
});

blogRouter.get("/bulk", async (c: any) => {
    try {
        const authorId = c.get("userId");
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
        }).$extends(withAccelerate());

        const resp = await prisma.post.findMany({
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        if (resp) return c.json({ msg: "Success", blog: resp });
        else return c.text("No blogs exist");
    } catch (err) {
        c.status(StatusCode.INTSERERR);
        c.text(`Error fetching blogs ${err}`);
    }
});

export default blogRouter;
