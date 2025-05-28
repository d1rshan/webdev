let age: number = 10

function render(document: any){
    console.log(document)
}

let numbers: number[] = [1,2,3]

// tuples in typescript - translated to normal arrays in javascript

let user: [number,string] = [1,"Darshan"] // fixed length
// user[0].toExponential() // so we are gonna get code completion for integer funcitons for user[0]
// user[1].charAt(1) // and string functions code completion - benefit of typescript

let idk: [number,string,number] = [1,"hello",3]


// Enums
// Pascal Case
const enum Size {Small,Medium,Large} // by default Small = 0, Medium = 1...
let mySize: Size = Size.Medium
console.log(mySize)


// Functions
// return type is annotated
// void if function is not returning anything
function calculateTax(income?: number) : number{
    let tax: number = (income || 1000)*0.1 // or give a default value for income like income = 1000
    return tax
}

// Objects
/* ts is valid in JavaScript
let employee = {id: 1}
employee.name = "Darshan"
*/

// let employee: {
//     readonly id: number;  // makes the field unmutable
//     name: string; 
//     retire: (date: Date) => void // methods
// } = 
// {
//     id: 1,
//     name: "bunny",
//     retire: (date: Date) => {
//         console.log(date) // just for demonstration
//     }
// }

/* 
but the above is not the best way cause if we want to make one more 
employee object for another employee we have to write that shit again 
which clashes with the DRY principle (Dont Repeat Yourselef)
so -> use type aliases
*/

type Employee = {
    readonly id: number;
    name: string;
    retire: (date: Date) => void;
}

let employee1: Employee = {
    id: 1,
    name: "Bunny",
    retire: (date) => {
        console.log(date)
    }
}

let employee2: Employee = {
    id: 2,
    name: "Chinnu",
    retire: (date) => {
        console.log(date)
    }
}


// Union Types
function kgToLbs (weight: number | string): number{
    // Narrowing
    if (typeof weight ===  'number'){
        return weight*2.2
    } else{
        return parseInt(weight)*2.2
    }
}
kgToLbs(10)
kgToLbs('10kg')

// Intersection Types (&) - later

// Literal (exact, specific)
let quantity: 50 | 100 = 50 // cannot be anything except 50 and 100

type Score = 50 | 100
let score: Score = 100


// Interfaces - better to use than types
interface Person{
    name: string
}

interface Engineer extends Person{
    engineerType: string
}