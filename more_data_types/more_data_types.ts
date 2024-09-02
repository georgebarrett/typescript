// adding pipelines allow for multiple data types but there has to be logic that distinguishes them
const combine = (
        // union types
        input1: number | string, 
        input2: number | string,
        // literal types. these are types that are based on the core union types but are more specific 
        resultConversion: 'as-number' | 'as-text'
    ) => {
    let result;
    // number data type checker
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2
    } else {
        // typescript knows input1/2 can be a string so i can access the in-built js functions
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString();
    // }
}

const combinedVinyls = combine(30, 50, 'as-number');
console.log(combinedVinyls);

const combinedStringVinyls = combine('30', '50', 'as-number');
console.log(combinedStringVinyls);

const combinedArtists = combine('afx', 'boc', 'as-text');
console.log(combinedArtists);

// literal types define how the result of a function call should be returned - forcing data conversion