//Emmett Kjolseth
//4/14/2024
//Object Enhancements Exercise

// 1) Same Keys and Values
const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName,
});

// 2) Computed Property Names
let favoriteNumber = 42;
const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

// 3) Object Methods
const instructor2 = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + "says bye!";
  },
};

// createAnimal - generates an animal accepting 3 arguments
const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  },
});
