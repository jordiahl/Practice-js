const p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000)); // 1
const p2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500));
// const p2 = new Promise(resolve => setTimeout(() => resolve(1), 3000)); // 1
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000)); // 3


//gets all promises, returns array with all results, stops and rejects when there is one rejected
Promise.all([p1, p2, p3]).then(resolve => { console.log(resolve) }, reject => { console.log('reject') });

//'reject'

Promise.allSettled([p1, p2, p3]).then(result => {
    console.log(result);
});

//result 
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'rejected', reason: Error: 'Whoops!' },
//   { status: 'fulfilled', value: 3 }
// ]


//Waits for the first settled response
Promise.race([p1, p2, p3]).then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})

//Error: 'Whoops!'

Promise.any([p1, p2, p3]).then(result => {
    console.log(result)
})

//3