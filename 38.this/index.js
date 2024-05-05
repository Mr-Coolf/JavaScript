// this = reference to the object where THIS is used
//        (the object depends on immediate context)
//        person.name may be replaced with this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`);}
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();
console.log(this);