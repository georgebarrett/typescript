const hobbies = ['running', 'climbing'];
const activeHobbies = ['RUNNING'];

// the spread operator pulls all the elements of 'hobbies' into 'activeHobbies' preventing a nested array
activeHobbies.push(...hobbies);
console.log(hobbies, activeHobbies);

const planet = {
    name: 'Saturn',
    number: 7
};

// key value pairs are pulled out of the 'planet' object. creates a perfect copy and not just a pointer
const copiedPlanet = { ...planet };
