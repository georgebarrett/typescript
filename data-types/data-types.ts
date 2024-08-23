// in typescript, objects can be used for type assignment
// const objectTypes: {
//     name: string;
//     age: number
// }

const person = {
    name: 'george',
    age: 36,
    // string[] = typescript syntax for an array of strings
    hobbies: ['writing', 'running']
};

// empty variable but typescript is expecting a 
let favouriteHobbies: string[];
favouriteHobbies = ['writing'];

console.log(person.name)

// hobby is identified as a string. therefore i can autocomplete in-built methods like .toLowerCase()
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

console.log(person);