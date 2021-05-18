// We want to display the user's email, given this JSON response and strict type

let userJSON: any = {
    name: "Bob",
    occupation: "Builder",
    title: "The",
    email: "bobthebuilder@canwefixit.com",
    workEthic: 9001,
}

type Person = {
    name: string,
    occupation: string,
    title: string,
    workEthic: number
}

let user: Person = userJSON;

console.log( user );