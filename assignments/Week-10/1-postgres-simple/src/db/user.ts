import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
    username: string,
    password: string,
    name: string
) {
    try {
        const createQuery = `INSERT INTO users(username, password, name) VALUES($1, $2, $3)`;
        const values = [username, password, name];
        const resp = await client.query(createQuery, values);
        console.log("create resp: ", resp);
        return { username, password, name };
    } catch (err) {
        console.error("Error processing request: ", err);
        return {};
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        const getQuery = `SELECT * FROM users WHERE id=$1`;
        const values = [userId];
        const resp = await client.query(getQuery, values);
        console.log("get resp: ", resp);
        return resp.rows[0];
    } catch (err) {
        console.error("Error processing request: ", err);
        return {};
    }
}
