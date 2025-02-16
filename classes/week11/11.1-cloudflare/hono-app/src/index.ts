import { Hono } from "hono";

const app = new Hono();

// Middleware
async function authMiddleware(c: any, next: any) {
    if (c.req.header("Authorization")) {
        // DO validation whatever
        await next();
    } else {
        return c.text("You dont have access to this API");
    }
}

app.use(authMiddleware);

app.post("/", async (c) => {
    // body, headers, query parameters, middlewares, connecting to database

    const body = await c.req.json();
    console.log("body: ", body);
    console.log(c.req.header("Authorization"));
    console.log(c.req.query("param"));

    return c.text("Hello Hono!");
});

export default app;
