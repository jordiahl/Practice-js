
const d = setTimeout(() => { console.log(500) }, 500)
setTimeout(() => { 
    console.log(200); 
    
    clearTimeout(d) 

}, 200)


//--------------------------------Interval--------------------------------------------
const i = setInterval(() => {
    console.log("my interval")
}, 500);

setTimeout(() => {
    clearInterval(i)
}, 1000);


