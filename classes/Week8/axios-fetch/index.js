// axios vs fetch
const axios = require("axios");

// GET CALLS

// 1) Using fetch

// function main() {
//     fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
//         const json = await response.json(); // Even converting to json is an async call
//         console.log(json.todos.length);
//     });
// }

async function main() {
    const response = await fetch("https://sum-server.100xdevs.com/todos"); // doesn't return in json
    const json = await response.json(); // Even converting to json is an async call
    console.log(json.todos.length);
}

main();

// 2) Using axios

async function axiosMain() {
    const resp = await axios.get("https://sum-server.100xdevs.com/todos", {
        headers: {
            Authorization: "Bearer 123",
        },
    }); // directly in json
    console.log(resp.data.todos.length);
}

axiosMain();

// POST / Others

// Fetch
async function main() {
    const resp = await fetch(
        "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        {
            method: "POST",
            body: {
                username: "harkirat",
                password: "1234567",
            },
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );
    const textualData = await resp.text(); // Because api returns text not json
    console.log("textualData");
}

// Axios
// In post, after the url the first parameter should be the body and then the headers
async function main() {
    const resp = await axios.post(
        "https://www.toptal.com/developers/postbin/1706261117587-5522551864851",
        { username: "harkirat", password: "1212345" },
        {
            headers: {
                Authorization: "Bearer 123",
            },
        }
    );
    console.log("resp.data");
}
