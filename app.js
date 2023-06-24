// In this exercise, you’ll refactor some ES5 code into ES2015. 
// Write your code in the sections with a comment to 
// “Write an ES2015 Version”.


// Key-name is exactly the same as the parameter name:
// function createInstructor(firstName, lastName) {
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

function createInstructor(firstName, lastName) {
    return {
        firstName, lastName
    }
}
// createInstructor('Tom', 'Hansen')
// {firstName: 'Tom', lastName: 'Hansen'}




let favoriteNumber = 42;

let instructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite'
}
// instructor
// {42: 'That is my favorite!', firstName: 'Colt'}



let teacher = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!";
    }
}
// teacher.sayHi()
// 'Hi!'
// teacher.sayBye()
// 'Colt says bye!'
// teacher
// {firstName: 'Colt', sayHi: ƒ, sayBye: ƒ}


// ## **createAnimal function**

// Write a function which generates an animal object.The function should accepts 3 arguments:

// species: the species of animal(‘cat’, ‘dog’)

// verb: a string used to name a function (‘bark’, ‘bleet’)

// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.


function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}

// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"