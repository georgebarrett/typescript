const hobbies = ['running', 'climbing'];
const activeHobbies = ['RUNNING'];

// the spread operator pulls all the elements of 'hobbies' into 'activeHobbies'
activeHobbies.push(...hobbies);
console.log(hobbies, activeHobbies);
