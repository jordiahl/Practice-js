const p1 = new Promise(resolve => setTimeout(() => resolve(1), 3000)); // 1
const p2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 500));
// const p2 = new Promise(resolve => setTimeout(() => resolve(1), 3000)); // 1
const p3 = new Promise(resolve => setTimeout(() => resolve(3), 1000)); // 3



const allP = async () => {
    try {
        const promise = await Promise.all([p1, p2, p3]);
        console.log(promise);
    }
    catch (e) {
        console.log(e);
    }
}

allP();


const allSettled = async () => {
    try {
        const p = await Promise.allSettled([p1, p2, p3]);
        console.log(p);
    }
    catch (e) {
        console.log(e);
    }
}

allSettled();


const race = async () => {
    try {
        const p = await Promise.race([p1, p2, p3]);
        console.log(p);
    } catch (e) {
        console.log(e);
    }
}

race();


const any = async () => {
    try {
        const p = await Promise.any([p1, p2, p3]);
        console.log(p);
    } catch (e) {
        console.log(e);
    }
}


any();

