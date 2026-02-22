/*// Arrow Functions

 const greet = (name) => {
    console.log("Hello", name);
 };

 greet("Dipam");

// Arrow function with template literals

 const greet1 = (name) => {
    console.log(`Hello ${name}`);
 };

 greet1("Dipam Ghimire");

// Array methods

 const numbers = [1, 2, 3, 4, 5];

// push and pop

 numbers.push(6);
 console.log("After push:", numbers);

numbers.pop();
 console.log("After pop:", numbers);  // For using Node we use terminal and give command node index.js in file directory

 console.log("Length of numbers array:", numbers.length);

// map, filter and reduce method

 const numberslist = [1, 2, 3, 4, 5];

// map method

const doubledNumbers = numberslist.map((number) => {
    return number * 2;
});

 console.log("Doubled numbers:", doubledNumbers);

// filter

const evenNumbers = numberslist.filter((number) => {
    return number % 2 === 0;
});

 console.log("Even numbers:", evenNumbers);

// reduce method

const sum = numberslist.reduce((accumulator, currentValue) => {
     console.log("Accumulator:", accumulator, "Current Value:", currentValue);
    return accumulator + currentValue;
}, 0);

console.log("Sum of numbers:", sum);

// slice and splice method

const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// slice method it takes two between the 1 and 5th index and return new array without modifying original array

const slicedFruits = fruits.slice(1, 5);
console.log("Sliced fruits:", slicedFruits);

// splice method it changes the data given in the respective index of the array or removes the data

fruits.splice(1, 2, "Blueberry", "Cranberry");
console.log("Fruits after splice:", fruits);
*/
// spread operator
const names= ["Dipam", "Ghimire", "Sita", "Ram"];

const newNames = [...names, "Hari", "Shyam"];
console.log("New names array:", newNames);

const user = {
    name: "Dipam",
    age: 25,
    address: "Thankot, Kathmandu",
};
const updatedUser = {
    ...user,
    isStudent: true,
    age: 26,
    email: "dipamghi123@gmail.com",
};
console.log("Updated user object:", updatedUser);


// Destructuring assignment

const [firstName, lastName] = newNames;
// console.log("First Name:", firstName);
// console.log("Last Name:", lastName);

const {name, address, email} = updatedUser;
console.log("Name:", name);
console.log("Address:", address);
console.log("Email:", email);

