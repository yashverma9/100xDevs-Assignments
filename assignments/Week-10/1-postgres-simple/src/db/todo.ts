import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
    userId: number,
    title: string,
    description: string
) {
    try {
        const createQuery = `INSERT INTO todos(user_id, title, description, done) VALUES($1, $2, $3, $4) RETURNING id`;
        const values = [userId, title, description, false];
        const resp = await client.query(createQuery, values);
        console.log("create resp: ", resp);
        const id = resp.rows[0].id;
        return { id, title, description, done: false };
    } catch (err) {
        console.error("Error processing request: ", err);
        return {};
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const updateQuery = `UPDATE todos SET done=${true} WHERE id=$1 RETURNING title, description`;
        const values = [todoId];
        const resp = await client.query(updateQuery, values);
        console.log("update resp: ", resp);
        const title = resp.rows[0].title;
        const description = resp.rows[0].description;
        return { title, description, done: true, id: todoId };
    } catch (err) {
        console.error("Error processing request: ", err);
        return {};
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const getQuery = `SELECT title, description, done, id, user_id FROM todos WHERE user_id=$1`;
        const values = [userId];
        const resp = await client.query(getQuery, values);
        console.log("get resp: ", resp);
        return resp.rows;
    } catch (err) {
        console.error("Error processing request: ", err);
        return [{}];
    }
}
