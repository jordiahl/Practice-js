const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    }, 500)

    setTimeout(() => {
        reject('rejected');
    }, 1500)

});

promise.then(r => {
    console.log(r);
}, reject => {
    console.log(reject);
})


//promise.catch() === promise.then(null, e => {})
promise.catch(e => {
    console.log(e);
})

// finally runs in the order that it is set, if placed before the <then> or <catch> it will run before, 
// finally doesnt take an arguement
promise
    .then(null, (e) => { console.log(e) })
    .finally(() => {
        console.log('finally ran')
    })

//Promise Chaining 
const pC = promise.then(r => {
    return (r + ' chain')
})

pC.then(r => {
    console.log(r)
})

//Error handling promises
promise.then(r => {
    throw new Error("error");
}).catch(e => {
    console.log(e);
})

//Multiple promises Promise.all
Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(responses => { responses.forEach(r => console.log(r)) })

//In case of one error Promise.all becomes rejected, stops watching the other promises
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(e => console.log(e)); // Error: Whoops!


//Promise.allSettled, gets all statuses of the promises, whether rejected or not
let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

Promise.allSettled(urls.map(url => fetch(url)))
    .then(results => { // (*)
        results.forEach((result, num) => {
            if (result.status == "fulfilled") {
                console.log(`${urls[num]}: ${result.value.status}`);
            }
            if (result.status == "rejected") {
                console.log(`${urls[num]}: ${result.reason}`);
            }
        });
    });

//Promise.race waits for the first settled promise and gets its result or error
Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve(1000), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3000), 3000))
]).then(r => console.log(r), e => console.log(e));

//Promise.any waits for the first resolved promise, if there is a reject then ignores it
Promise.any([
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 1000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(r => console.log(r));

//Go back to promisification

//async await
//if <resolve> gets the result of the "then"
//if <reject> will throw an error and you will have to catch it

(async () => {
    try {
        const result = await Promise.race([
            new Promise((resolve, reject) => setTimeout(() => resolve('then runs'), 1000)),
            new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500)),
            new Promise((resolve, reject) => setTimeout(() => resolve(3000), 3000))
        ]);
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
})()
