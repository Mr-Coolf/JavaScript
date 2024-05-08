// nested objects = objects inside of other objects.
//                  Allows you to represent more data structures
//                  Child object is enclosed by a parent object
//                  Person{Adress{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

// const person = {
//     fullName: "Spongebob Squarepants",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address: {
//         street: "124 Conch St.",
//         city: "Bikini Bottom",
//         country: "Int. Water",
//     }
// }

// for (const property in person.address) console.log(person.address[property]);

class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }

}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
const person2 = new Person("Patrick", 34, "128 Conch St.", "Bikini Bottom", "Int. Waters");
const person3 = new Person("Squidward", 45, "126 Conch St.", "Bikini Bottom", "Int. Waters");

console.log(person1.address);