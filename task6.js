const arr1 = ['a', 'a', 'a'];
const arr2 = [1, 2, 5];

function areAllequal(array){
    const result = new Set(array).size === 1;
    return result;
}

console.log(areAllequal(arr1));
console.log(areAllequal(arr2));