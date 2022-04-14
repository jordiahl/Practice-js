
let sum = (a) => {
    return (b) => {
        if (b == undefined) {
            return a;
        }
        let current = a + b;
        return sum(current);
    }
}

console.log(sum(1)(2)(3)())

function sum1(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.valueOf = () => currentSum;

    f.toString = () => currentSum;

    return f;
}

console.log(+sum1(1)(2)(3));
