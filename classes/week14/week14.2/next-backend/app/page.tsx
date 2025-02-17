import axios from "axios";
import client from "@/db";

async function getUserData() {
    await new Promise((r) => setTimeout(r, 2000)); // Adding extra timeout to test loader
    // const resp = await axios.get(
    //     "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    // );   // Using external server

    // No need to make an extra axios call
    // const resp = await axios.get("http://localhost:3000/api/user");
    // return resp.data;
    const user = await client.user.findFirst();
    return user;
}

// NextJS allows you to defind async components in server components
export default async function Home() {
    const userDetails = await getUserData();
    return (
        <div className="flex flex-col justify-center h-screen items-center">
            <div className="border p-8 rounded">
                <div>Name: {"Mr Yash Verma"}</div>
                {userDetails?.username}
            </div>
        </div>
    );
}
