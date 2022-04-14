//Call ----------------------------------------------------------------------------------------------------------

function xy() {
    const world = function (a) {
        const hello = "not hello";
        console.log(a)
        console.log(this.hello)
    }

    return world.call(this, "yolo", "yoloB", "yoloC"); //pass this to lower function
}

const myObj = {
    hello: 'hello'
}

const test = xy.call(myObj); //pass object to xy

//Apply ----------------------------------------------------------------------------------------------------------
function xy() {
    const world = function (a, b, c) {
        const hello = "not hello";
        console.log(a, b, c);
      	console.log(hello)//!! not hello-> current function scope
        console.log(this.hello); //!! hello -> this comes from the apply 
    }

    return world.apply(this, ["yolo", "yoloB", "yoloC"]); //pass this to lower function
}

const myObj = {
    hello: 'hello'
}

const test = xy.apply(myObj); //pass object to xy


//Binding
user = {
    firstName: "John"
};

function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

// bind this to user
let funcUser = func.bind(user);

funcUser("Hello");

