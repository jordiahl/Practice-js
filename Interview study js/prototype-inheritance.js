const animal = {
  fur: "black",
  name: "undefined",
  //!! Doesn't work with anonymous functions
  eat() {
    console.log(`${this.name} pretends to eat`);
  },
  sleep() {
    console.log("pretends to sleep");
  },
  walk() {
    console.log("pretends to walk");
  },
  shake() {
    console.log(`shake fur of color ${this.fur} `);
  },
};

const lion = {
  fur: "yellow",
  name: "lion",
};

const rabbit = {
  name: "rabbit",
  fur: "white",
};

const crow = {
  fur: "black",
  //!! can be done this way too
  __proto__: animal,
};

//[[Prototype]] = undefined -> [[Prototype]] = animal
lion.__proto__ = animal;
rabbit.__proto__ = animal;

//!! Better way to do that is: (most modern way)
// Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj.
// Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto.

rabbit.eat();
lion.eat();
lion.shake();

//!! FUNCTION INHERITANCE with .prototype
//!! Setting Rabbit.prototype = animal literally states the following:
//!!  -"When a new Rabbit is created, assign its [[Prototype]] to animal"

// Constructor Function
const Rabbit = function (name) {
  this.name = name;
};

//!Important
Rabbit.prototype = animal;

const r = new Rabbit("rabbit");
r.eat();
