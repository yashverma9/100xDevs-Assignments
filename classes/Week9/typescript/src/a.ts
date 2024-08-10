let x: number = 1;
// x = "yash"; // This will give error and while compiling also
console.log(x);

////////////////////////////////////////////////////////////

function greet(firstName: string) {
    console.log("Hello " + firstName);
}

///////////////////////////////////////////////////

greet("Dr Doom");

//greet(007) // This gives error
greet("007"); // This doesn't

//////////////////////////////////////////////////

// THe function has a return type, but ts infers the type. However good practice to mention
function sum(a: number, b: number): number {
    return a + b;
}

const value = sum(1, 2);
console.log(value);

//////////////////////////////////////////////////////

// How to mention function type when function is passed as an input
function runAfterASec(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfterASec(function () {
    console.log("Hi theere!");
});

//////////////////////////////////////////////////////////////////////////

// When we have multiple usage of an object type, just define it once and reuse
// Interfaces are useful in react props as well, they help us ensure correct props are passed

interface User {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; // This ? makes it optional, not giving this won't throw error
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true;
    } else return false;
}

function greetUser(user: User) {
    console.log("hi " + user.firstName);
}

isLegal({ firstName: "Yash", lastName: "Verma", age: 25 });

// Classes can implement interfaces as well

// Both types and interfaces are similar and can be used most places, big difference is implemeting classes. But common practice to use Intefaces

/////////////////////////////////////////////

// You can give multiple possible types using "or" , only possible in types and not interfaces
// You can define a type variable and reuse

type GreetArg = number | string;

function greetNew(id: GreetArg) {}

greetNew(1);
greetNew("1");

////////////////////////////////////////////////

// Intersection of types/interfaces

type Emp = {
    name: string;
    startDate: Date;
};

interface Manager {
    name: string;
    department: string;
}

type TechLead = Emp & Manager; // This is similar to the below type

// type = TechLead = {name: string, department: string, startDate: Date}

// So types vs interface:
