import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();


async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({data: {
        username, firstName, lastName, password
    }})
    return res;
}

async function insertTodo(title: string, description: string,userId: number) {
    const res = await prisma.todo.create({data: {
        title, description, userId, done: false
    }})
    return res;
}

async function getUsers() {
    const res = await prisma.user.findMany();
     return res;
}

async function getTodosAndDetails(userId: number) {
    const res = await prisma.todo.findMany(
        {
            where: {userId},
            select: {
                id: true, title: true, description: true, user: true // using relationship herer
            }
        }
    );
     return res;
}


app.get("/createUser", async (req, res)=> {
    
    const resp = await insertUser("vermayash", "12345678", "yash", "verma");
    
    res.json({"msg": resp})
})

app.get("/getUsers", async (req, res)=> {
    
    const resp = await getUsers();
    
    res.json({"User": resp})
})

app.get("/createTodo", async (req, res)=> {
    
    const resp = await insertTodo("First todo", "some descrip", 1);
    
    res.json({"msg": resp})
})

app.get("/getTodoDetails", async (req, res)=> {
    
    const resp = await getTodosAndDetails(1);
    
    res.json({"Todo": resp})
})



app.listen(3000, () => {console.log("runnning on 3000")})