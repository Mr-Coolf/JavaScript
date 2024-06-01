// JSON = (JS Object Notation) data-interchange format used for exchanging data between a server and a web application
//        JSON files {key: value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Ilya", "Alexey", "Ivan", "Duje"];
const jsonNames = JSON.stringify(names);

const person = {
    "name" : "Ilya",
    "age" : 14,
    "isSmart" : true,
    "hobbies" : ["tennis", "valorant", "school"]
};
const jsonPerson = JSON.stringify({
    "name" : "Ilya",
    "age" : 14,
    "isSmart" : true,
    "hobbies" : ["tennis", "valorant", "school"]
});

const people = [
    {
        "name" : "Ilya",
        "age" : 14,
        "isSmart" : true
    },
    {
        "name" : "Alexey",
        "age" : 15,
        "isSmart" : true
    },
    {
        "name" : "Ivan",
        "age" : 15,
        "isSmart" : true
    },
    {
        "name" : "Duje",
        "age" : 15,
        "isSmart" : true
    }
];
const jsonPeople = JSON.stringify(people);


const nonJsonNames = JSON.parse(jsonNames);
const nonJsonPerson = JSON.parse(jsonPerson);
const nonJsonPeople = JSON.parse(jsonPeople);


fetch(".\\json\\people.json").then(response => response.json()).then(values => values.forEach(element => {
    console.log(element);  
})).catch(error => console.error(error));