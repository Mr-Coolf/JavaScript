// constructor = special method for defining the properties and methods of objects

function Car(make, model, year, colour) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.colour = colour,
    this.drive = function(){
        console.log(`You are driving ${this.year} ${this.make} ${this.model}`);
    }
}

const car1 = new Car("Tesla", "ModelX", "2024", "dark_gray");
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.colour);

const car2 = new Car("Audi", "A7", "2024", "black");
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.colour);
car2.drive();

const car3 = new Car("Ford", "Mustang", "2022", "blue");
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.colour);