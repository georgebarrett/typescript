// adding pipelines allow for multiple data types but there has to be logic that distinguishes them
const combine = (input1: number | string, input2: number | string) => {
    let result;
    // number data type checker
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        // typescript knows input1/2 can be a string so i can access the in-built js functions
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedVinyls = combine(30, 50);
console.log(combinedVinyls);

const combinedArtists = combine('afx', 'boc');
console.log(combinedArtists);   