const obj = {
    firstName: "Thai",
    lastName: "Hao",
    age: 28,
    fullName: function () {
        return this.firstName + " " + this.lastName
    }
};

console.log(obj.fullName());

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


// 1. Write the command to add the language "Go" to the end of the languages array.
// 2. Change the difficulty to the value of 7.
// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
// 4. Write the command to add a new key called isFun and a value of true to the programming object.
// 5. Using a loop, iterate through the languages array and console.log all of the languages.
// 6. Using a loop, console.log all of the keys in the programming object.
// 7. Using a loop, console.log all of the values in the programming object.

programming.languages.push('Go');
console.log(programming.languages);
programming.difficulty = 7;
console.log(programming.difficulty);
delete programming.jokes;
console.log(programming);
programming.isFun = true;
console.log(programming);

programming.languages.forEach(function(item) {
    console.log(item);
});

ketqua1 = Object.keys(programming);
ketqua1.forEach(function(key) {
    console.log(key);
})
ketqua2 = Object.values(programming);
ketqua2.forEach(function(value) {
    console.log(value);
})


