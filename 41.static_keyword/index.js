// static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)

// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius) {
//         return radius*2;
//     }
//     static getCircumference(radius) {
//         return radius*2*this.PI;
//     }
//     static getArea(radius){
//         return (radius ** 2) * this.PI;
//     }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(radius=12));
// console.log(MathUtil.getCircumference(12));
// console.log(MathUtil.getArea(12));

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users on this platform`);
    }

    sayHello(){
        console.log(`Hello! My username is ${this.username}`);
    }

}

let person1 = new User("abcd");
let person2 = new User("efgh");
let person3 = new User("ijkl");
let person4 = new User("mnop");

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();

console.log(User.userCount);

User.getUserCount();