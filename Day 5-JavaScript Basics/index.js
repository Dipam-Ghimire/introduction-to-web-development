//javascript variables

var fullName = "Dipam Ghimire";

let address = "Thankot, Chandragiri, Kathmandu";

const bloodGroup = "O+";


console.log("Full Name:", fullName);
console.log("Address:", address);
console.log("Blood Group:", bloodGroup);

// Data types in JavaScript

const age = 25; // Number

let isStudent = true; // Boolean

let name = "Dipam"; // String

let hobbies = ["Coding", "Traveling", "Cooking"]; // Array

console.log("First hobby:", hobbies[0]);//print array element

let person = {
    name: "Dipam",
    age: 25,
    isStudent: true,
    hobbies: ["Coding", "Traveling", "Cooking"],
}; // Object 

console.log("Person's name:", person["name"]);//print object property
console.log("Person's name:", person.name);//print object property using dot notation

// functions in JavaScript

function greet(name) {
    console.log("Hello",name);
}

greet("Dipam");//call function with argument

// dom manipulation

const headingElementbyID = document.getElementById("heading-2");
console.log("Heading Element by id:", headingElementbyID);

const headingElementbyQuery = document.querySelector("#heading-2");
console.log("Heading Element by query:", headingElementbyQuery);

headingElementbyQuery.textContent = "Get Element By Query";//change text content of element
headingElementbyQuery.style.color = "blue";//change style of element

const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", function() {
    alert("Button clicked!");
    console.log("Button was clicked!");
});