// // getter = special method that makes a property readable
// // setter = special method that makes a property writeable

// // validate and modify a value when reading/writing a property

// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     set width(newWidth){
//         if(newWidth > 0 && typeof newWidth == typeof Number()){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a positive number");
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0 && typeof newHeight == typeof Number()){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Height must be a positive number");
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }
//     get area() {
//         return `${(this._width * this._height).toFixed(1)}cm`;
//     }
// }

// const rect = new Rectangle(3, 4);

// // rect.width = -1343;
// // rect.height = -1343;

// console.log(rect.height);
// console.log(rect.width);
// console.log(rect.area);


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        newFirstName = String(newFirstName);
        if (newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error("First name has to be a non-empty string");
        }
    }
    set lastName(newLastName){
        newLastName = String(newLastName);
        if (newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error("Last name has to be a non-empty string");
        }
    }
    set age(newAge){
        if (typeof newAge == typeof Number() && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error("Age must be a non-negative number");
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get fullName(){
        return this._firstName + " " + this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);
console.log(person.fullName);
console.log(person.age);