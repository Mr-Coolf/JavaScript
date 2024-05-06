// classes = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions
//           ex. static keyword, encapsulation, inheritance

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calcTotal(salesTax){
        return this.price + this.price * salesTax;
    }
}

const salesTax = 0.05;

const shirt = new Product("Shirt", 19.99);
shirt.displayProduct();
const pants = new Product("Pants", 22.50);
pants.displayProduct();
const underwear = new Product("Underwear", 100);
underwear.displayProduct();

const total = shirt.calcTotal(salesTax) + pants.calcTotal(salesTax) + underwear.calcTotal(salesTax);
console.log(Math.round(total*100) / 100);