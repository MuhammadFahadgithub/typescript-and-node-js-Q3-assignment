// Task 3
// store a person name in a variable and then print that person's name in lowercase, uppercase, and titlecase.
const personName: string = "MUHAMMAD FAHAD";
// lowercase
console.log(personName.toLowerCase());
// upercase
console.log(personName.toUpperCase());
// titlecase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();
let titleCase = firstLetter + restLetters;
console.log(titleCase);