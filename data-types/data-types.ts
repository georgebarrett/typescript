// in typescript, objects can be used for type assignment
// const objectTypes: {
//     name: string;
//     age: number
// }

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     // a tuple! bsasically an array with a defined structure. there must be two elements 1. is a number 2. is a string
//     role: [number, string];
// } = {
//     name: 'george',
//     age: 36,
//     // string[] = typescript syntax for an array of strings
//     hobbies: ['writing', 'running'],
//     role: [2, 'author']
// };

enum Role {
    USER,
    ADMIN,
    SUPER_ADMIN
};

const person = {
    name: 'george',
    age: 36,
    // string[] = typescript syntax for an array of strings
    hobbies: ['writing', 'running'],
    role: Role.SUPER_ADMIN
};

if (person.role === Role.SUPER_ADMIN) {
    console.log('hola mundo');
}

console.log(person);
console.log(person.name)

// empty variable but typescript is expecting a 
let favouriteHobbies: string[];
favouriteHobbies = ['writing'];

// hobby is identified as a string. therefore i can autocomplete in-built methods like .toLowerCase()
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
