const hobbies = ['running', 'climbing'];
const activeHobbies = ['RUNNING'];

// the spread operator pulls all the elements of 'hobbies' into 'activeHobbies' preventing a nested array
activeHobbies.push(...hobbies);
// console.log(hobbies, activeHobbies);

// destructuring the hobbies array
// the destructured elements get pulled out in order
// the rest of the elements par 0 and 1 will be stored in a new array called remainingHobbies
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const planet = {
    planetName: 'Saturn',
    numberFromSun: 7
};

// key value pairs are pulled out of the 'planet' object. creates a perfect copy and not just a pointer
const copiedPlanet = { ...planet };

// when destructing objects the key needs to be specified 
const { planetName, numberFromSun } = planet;

console.log(planetName, numberFromSun, planet);
