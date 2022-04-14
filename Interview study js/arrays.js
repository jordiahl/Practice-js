let ar = [3, 2, 1, 4];

//!! mutates the array
ar.sort((a, b) => a - b);
console.log(ar); //[ 1, 2, 3, 4 ]

ar = [0, 1, 2, 3];
//!! mutates the array
//(index start, number to delete)
ar.splice(0, 2); // returns deleted elements -> splash the array, same array (dirties it)
console.log(ar); //[2,3]

ar = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//!! doesn't mutate the array
// from 0 -> the 5th index
const slice = ar.slice(0, 5); //returns the slice -> takes a slice out a new pizza
console.log({ slice }, { ar }); // [ 0, 1, 2, 3, 4 ]

//!! doesn't mutate the array, generates a new array 
const filter = ar.filter((v) => v < 5);
console.log({ filter }, { ar }); //[ 0, 1, 2, 3, 4 ]

//!! doesn't mutate the array
const map = ar.map((v) => 1);
console.log({ map }, { ar }); //[1, 1, 1, 1, 1,1, 1, 1, 1]

//!! doesn't mutate the array
const reduce = ar.reduce((acc, current) => {
  return acc + current;
}, 0);
console.log({ reduce }); //{ reduce: 36 }

//!! doesn't mutate the array
const find = ar.find((v) => v > 4);
console.log({ find }); // {find: 5}
