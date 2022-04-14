
function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

//Inner lexical environment  -> access to outer object -> access to outer object, all the way to global