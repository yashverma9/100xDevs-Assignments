import { Context } from "hono";
import { Jwt } from "hono/utils/jwt";
import { z } from "zod";
import {
    signupSchema,
    signinSchema,
    postSchema,
    postUpdateSchema,
    postFetchSchema,
} from "@vermayash/medium-zod";

export async function validateSignupInput(c: any, next: any) {
    const reqBody = await c.req.json();
    const { success } = signupSchema.safeParse(reqBody);
    console.log("done here");
    if (success) await next();
    else return c.json({ msg: "Invalid inputs" });
}

export async function validateSigninInput(c: any, next: any) {
    const reqBody = await c.req.json();
    const { success } = signinSchema.safeParse(reqBody);
    console.log("done here");
    if (success) await next();
    else return c.json({ msg: "Invalid inputs" });
}

export async function validatePostInput(C: any, next: any) {
    const reqBody = await C.req.json();
    const { success } = postSchema.safeParse(reqBody);
    console.log("suc:", success);
    if (success) await next();
    else return C.json({ msg: "Invalid post content or title" });
}

export async function validatePostUpdateInput(C: any, next: any) {
    const reqBody = await C.req.json();
    const { success } = postUpdateSchema.safeParse(reqBody);
    console.log("suc:", success);
    if (success) await next();
    else return C.json({ msg: "Invalid post content or title" });
}

export async function validatePostFetchInput(c: any, next: any) {
    const id = c.req.param("id");

    const { success } = postFetchSchema.safeParse({ id });
    console.log("suc:", success);
    if (success) await next();
    else return c.json({ msg: "Invalid id" });
}

export async function validateToken(c: any, next: any) {
    console.log("req:", c.req.raw.headers);
    const auth = c.req.raw.headers.get("authorization");
    console.log("auth: ", auth);
    const token = auth.split(" ")[1];
    try {
        const decoded = await Jwt.verify(token, c.env.JWT_SECRET);
        const userId = decoded.userId;
        c.set("userId", userId);
        console.log(`User ${userId} is verified`);
        await next();
    } catch (err) {
        c.status(401);
        return c.json({ msg: "User is unauthorized" });
    }
}
