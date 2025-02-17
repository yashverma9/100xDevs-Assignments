// In this file within actions we are defining a server action which is an alternate way to define server logic in functions instead of APIs.
// The client can directly call these functions (actions) normally like any other function

// We need to mention this so that this is called at the server and not sent to the client
"use server";

import client from "@/db";

// Now the same server function/action can be used in both client and server components
export async function signup(username: string, password: string) {
    // store the data in the db
    try {
        await client.user.create({
            data: {
                username: username,
                password: password,
            },
        });
        return true; // success signup
    } catch (e) {
        return false; // failed signup
    }
}
