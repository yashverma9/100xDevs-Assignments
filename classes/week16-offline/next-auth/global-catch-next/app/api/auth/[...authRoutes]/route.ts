import { NextRequest, NextResponse } from "next/server";

export async function GET(
    req: NextRequest,
    args: { params: { authRoutes: string[] } }
) {
    // We dont need to do these steps of getting the routes etc in next auth as it will do this for us

    const params = await args.params; // From next 14 we need to await
    const authRoutes = params?.authRoutes;
    console.log("The route hit: ", authRoutes);
    return NextResponse.json({ msg: "Hello" });
}
