// Next js follows a way where all backend apis are defined in api folder (convention, can be any other folder as well) withing sub folder with each having a route.ts
// Based on the method of API, we need to define functions a below. You can call the API using ../api/folder_name

import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

// No need to define this and make axios calls on frontend... directly fetch from db on the page
// Also as we are fetching directly, this page can no longer be client side... it has to be server side component
export async function GET() {
    const user = await prismaClient.user.findFirst();

    return NextResponse.json({
        name: "Yash Verma",
        email: user?.username,
    });
}

export async function POST(req: NextRequest) {
    // extract the req body
    const body = await req.json();
    console.log("Body: ", body);

    // store the data in the db
    await prismaClient.user.create({
        data: {
            username: body.username,
            password: body.password,
        },
    });

    return Response.json({
        message: "You are logged in!",
    });
}
