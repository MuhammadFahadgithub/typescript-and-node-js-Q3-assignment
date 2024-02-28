// Task 3
// store a person name in a variable and then print that person's name in lowercase, uppercase, and titlecase.
var personName = "MUHAMMAD FAHAD";
// lowercase
console.log(personName.toLowerCase());
// upercase
console.log(personName.toUpperCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetters = personName.slice(1).toLowerCase();
var titleCase = firstLetter + restLetters;
console.log(titleCase);
