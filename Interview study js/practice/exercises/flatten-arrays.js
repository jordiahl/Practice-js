
const b = [1, 2, 3, 4, [5, 6, 7], [8, [9, 10], 11], [12, 13, [14]]];

const result = [];
const addArray = (arr) => {
    let result = [];
    arr.forEach(v => {
        if (Array.isArray(v)) {
            const flattened = addArray(v);
            result = [...result, ...flattened];
            return;
        }
        result.push(v);
    });
    return result;
}

let answer = addArray(b);
answer;


const flattennedReduced = (arr) => {
    const result = arr.reduce((acc, value, index, oldArray) => {
        if (Array.isArray(value)) {
            const flat = flattennedReduced(value);
            return [...acc, ...flat];
        }
        acc.push(value);
        return acc;
    }, [])

    return result;
}

answer = flattennedReduced(b);

//1,2,3,4,[5,6,[7,8]]
//1,2,3,4, []
//[4]
//5,6, []
// [[4],[2]]


const generateCurrentArray = (array, indexArray) => {
    let currentArr = array;

    indexArray.forEach(val => {
        currentArr = currentArr[val];
    })

    return currentArr;
}


const flatIteration = (arr) => {
    if (arr.length === 0) {
        return [];
    }
    let result = [];
    let stack = [];
    let currentArray = arr;
    let index = 0;

    while (stack.length > 0 || (currentArray.length === arr.length && index <= arr.length - 1)) {
        if (index > currentArray.length - 1) {
            index = stack.pop();
            currentArray = generateCurrentArray(arr, stack);
            index++;
            continue;
        }

        const currentValue = currentArray[index];
        //1,2,3,4,[5,6,[7,8]]
        // [4]
        // [4,2]
        if (Array.isArray(currentValue)) {
            stack.push(index);
            currentArray = currentValue;
            index = 0;
            continue;
        }

        result.push(currentValue);
        index++;
    }
    return result;
}


flatIteration(b);
