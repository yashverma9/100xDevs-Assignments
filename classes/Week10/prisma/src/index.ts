import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
    email: string,
    password: string,
    firstName: string,
    lastName: string
) {
    const res = await prisma.user.create({
        data: {
            email,
            password,
            firstName,
            lastName,
        },
    });
    console.log("Response: ", res);
}

// insertUser("yash@gmail.com", "1234", "yash", "verma");

interface UserUpdateParams {
    firstName: string;
    lastName?: string;
}

async function updateUser(
    email: string,
    { firstName, lastName }: UserUpdateParams
) {
    const resp = await prisma.user.update({
        where: { email },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(resp);
}

// updateUser("yash@gmail.com", { firstName: "Yash" });

async function getUserDetails(email: string) {
    const resp = await prisma.user.findFirst({
        where: { email },
    });

    console.log("Details: ", resp);
}

getUserDetails("yash@gmail.com");
