const hobbies = ['running', 'climbing'];
const activeHobbies = ['RUNNING'];

// the spread operator pulls all the elements of 'hobbies' into 'activeHobbies' preventing a nested array
activeHobbies.push(...hobbies);
console.log(hobbies, activeHobbies);

const planet = {
    name: 'Saturn',
    number: 7
};

// key value pairs are pulled out of the 'planet' object. usually to be added to another object
const copiedPlanet = { ...planet };

// rest parameters
// 'numbers' is just a placeholder. it is a spread operator to allow a flexible amount of arguments
// the spread operator does need to be told what to expect
const addingAgain = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0)
};

const addedNumbers = addingAgain(1, 2, 3, 4, 5, 6, 7);
console.log(addedNumbers);
