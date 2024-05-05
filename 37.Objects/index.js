// object = A collection of related properties and/or methods;
//          Can represent real world objects (people, products, places)
// object = {
//      key:value,
//      key: function(){}
// }

const person1 = {
    firstName: "SpongeBob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: () => console.log("Hi! I am Spongebob!"),
    eat: () => console.log("I am eating a Krabby Patty"),
}
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    sayHello: () => console.log("Hey! I am Patrick..."),
    eat: () => ("I am eating pizza"),
}

// console.log("\n" + person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmployed);
person2.sayHello();
person2.eat();