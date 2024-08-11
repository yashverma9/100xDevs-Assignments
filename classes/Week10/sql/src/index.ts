import { Client } from "pg";

// const client = new Client({
//     host: "",
//     port: 5334,
//     database: 'mydb',
//     user: "mydb_owner",
//     password: "hLi6Vl5KHpgo"
// })

const client = new Client({
    connectionString:
        "postgresql://mydb_owner:hLi6Vl5KHpgo@ep-tight-firefly-a5mb9z40.us-east-2.aws.neon.tech/mydb?sslmode=require",
});

async function createUsersTable() {
    try {
        await client.connect();
        const result = await client.query(`CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
        console.log("result: ", result);
    } catch (err) {
        console.error("Error processing request: ", err);
    } finally {
        await client.end(); // close the connection
    }
}

// createUsersTable();

async function insertUser(username: string, email: string, password: string) {
    try {
        await client.connect();

        // const insertQuery = `INSERT INTO users (username, email, password)
        //      VALUES (${username}, ${email}, ${password} );`
        // const result = await client.query(insertQuery);

        // ######### The above way of putting the values in the query string directly can lead to SQL injection. Very unsecure.############

        const insertQuery =
            "INSERT INTO users(username, email, password) VALUES($1, $2, $3)";
        const values = [username, email, password];
        const result = await client.query(insertQuery, values); // We don't put the values in string

        console.log("result: ", result);
    } catch (err) {
        console.error("Error during insertion: ", err);
    } finally {
        await client.end(); // close the connection
    }
}

// insertUser("vermayash", "email@gmail.com", "12345678");

async function getUser(email: string) {
    try {
        await client.connect();
        const query = "SELECT * FROM users WHERE email = $1";
        const result = await client.query(query, [email]);
        if (result.rows.length > 0) {
            console.log("User found: ", result.rows[0]);
            return result.rows[0];
        } else {
            console.log("User not found!");
            return null;
        }
    } catch (err) {
        console.error("Error fetching users: ", err);
    } finally {
        client.end();
    }
}

getUser("email@gmail.com");
