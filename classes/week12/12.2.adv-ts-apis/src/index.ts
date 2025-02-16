// Basic ts example

function basicTs() {
    interface User {
        name: string;
        age: number;
    }

    function sumOfAge(user1: User, user2: User) {
        return user1.age + user2.age;
    }

    const totalAge = sumOfAge(
        { name: "Yash", age: 25 },
        { name: "Jira", age: 2 }
    );

    console.log(`Total age is ${totalAge}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////

// Using Pick

function tsPick() {
    interface User {
        id: string;
        name: string;
        age: string;
        email: string;
        password: string;
    }

    type UpdateProps = Pick<User, "name" | "age" | "email">;

    function updateUser(updatedProps: UpdateProps) {
        // hit db to update user
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//Using Partial in TS

function tsPartial() {
    interface User {
        id: string;
        name: string;
        age: string;
        email: string;
        password: string;
    }

    type UpdateProps = Pick<User, "name" | "age" | "email">;

    type UpdatePropsOptional = Partial<UpdateProps>; // This will make the 3 parameters optional like how you do using name?: string

    function updateUser(updatedProps: UpdatePropsOptional) {
        // hit db to update user
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// TS Readonly

function tsReadonly() {
    const a = [1, 2, 3, 4];
    a[0] = 4; // This is allowed as we are updating internal values, not the reference/value of the variable a
    //a = [1,2] // This is not allowed as const

    // We can make inner properties also as non-updatable using readonly

    type User = {
        readonly name: string;
        readonly age: number;
    };

    const user1: User = {
        name: "John",
        age: 21,
    };

    // or

    type User2 = {
        name: string;
        age: number;
    };

    const user2: Readonly<User2> = {
        name: "John",
        age: 12,
    };

    //user2.age = 20; // This will show error as age is now readonly

    // This is useful in case of config objects to avoid them from being updated by mistake

    interface Config {
        endpoint: string;
        apiKey: string;
    }

    const config: Readonly<Config> = {
        endpoint: "https://api.com",
        apiKey: "jasfhbksjbfskafafa1234fgfgdsds",
    };

    // config.apiKey = "ajsdjasd"; // this will give error
}

function tsRecordsMaps() {
    // Cleaner syntax to define types for objects

    // Normal way
    interface User {
        id: string;
        name: string;
    }

    type Users = {
        [key: string]: User;
    };

    const users: Users = {
        abc: { id: "1", name: "name" },
        def: { id: "2", name: "hahha" },
    };

    //Cleaner -using Records

    interface UserR {
        id: string;
        name: string;
    }

    type UsersR = Record<string, UserR>;

    const usersR: UsersR = {
        abc: { id: "1", name: "name" },
        def: { id: "2", name: "hahha" },
    };

    // Maps (another way to define key value pairs /objects)

    const usersM = new Map<string, User>();
    usersM.set("abc", { id: "1", name: "name" });
    usersM.set("def", { id: "2", name: "Hahah" });
}

function tsExclude() {
    type EventType = "click" | "scroll" | "mousemove";

    type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove' // This excludes one of the type values

    const handleEvent = (event: ExcludeEvent) => {
        console.log(`Handling event: ${event}`);
    };

    handleEvent("click"); // OK
    // handleEvent('scroll') // Throws error as its no longer part of type
}

import { z } from "zod";
function tsZodInfer() {
    // We define a zod schema for input validation and the again a type for the request body. So we can directly infer without writing twice

    const userProfileSchema = z.object({
        name: z.string().min(1),
        email: z.string().email(),
        age: z.number().min(18).optional(),
    });

    type UpdateBodyType = z.infer<typeof userProfileSchema>;

    // express code, put call using updateBody of type UpdateBodyType
}
