import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            email: {},
            password: {},
        }),
    ],
});
