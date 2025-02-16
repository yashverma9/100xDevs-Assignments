import { z } from "zod";

const signupSchema = z.object({
    name: z.string().trim().min(1),
    email: z.string().min(1),
    password: z.string().min(6),
});

type SignupType = z.infer<typeof signupSchema>;

const signinSchema = z.object({
    email: z.string().min(1),
    password: z.string().min(6),
});

type SigninType = z.infer<typeof signinSchema>;

const postSchema = z.object({
    title: z.string().trim().min(1),
    content: z.string().trim().min(1),
});

type PostType = z.infer<typeof postSchema>;

const postUpdateSchema = z.object({
    id: z.string().trim().min(1),
    title: z.string().trim().min(1).optional(),
    content: z.string().trim().min(1).optional(),
});

type PostUpdateType = z.infer<typeof postUpdateSchema>;

const postFetchSchema = z.object({
    id: z.string().trim().min(1),
});

type PostFetchType = z.infer<typeof postFetchSchema>;

export {
    signupSchema,
    SignupType,
    signinSchema,
    SigninType,
    postSchema,
    PostType,
    postUpdateSchema,
    PostUpdateType,
    postFetchSchema,
    PostFetchType,
};
