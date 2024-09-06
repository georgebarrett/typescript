const hobbies = ['running', 'climbing'];
const activeHobbies = ['RUNNING'];

// the spread operator pulls all the elements of 'hobbies' into 'activeHobbies'
activeHobbies.push(...hobbies);
console.log(hobbies, activeHobbies);

const planet = {
    name: 'Saturn',
    number: 7
};

// key value pairs are pulled out of the 'planet' object. usually to be added to another object
const copiedPlanet = { ...planet };

// rest parameters
// 'numbers' is just a placeholder. the spread operator will merge 
const addingAgain = (...numbers) => {

};

const addedNumbers = addingAgain(1, 2, 3, 4, 5, 6, 7);
