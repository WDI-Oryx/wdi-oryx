import Person from "./Person";
import Shape from "./Shape";
import Triangle from "./Triangle";
import { add, multiply } from "./math";

add(4, 5);
multiply(5, 20);

const jacques = new Person("Jacques", "jacques@ga.co");
jacques.displayEmail();

// jacques.sayHi();

class Rectangle extends Shape {
  constructor(w, h) {
    super("Rectangle");
    this.width = w;
    this.height = h;
  }
}
const r = new Rectangle(42, 20);

const tri = new Triangle(4, 5, 6);
console.log(tri);

class Vehicle {
  constructor(type) {
    this.type = type;
    console.log(`A new ${this.type} was created`);
  }
}

class Car extends Vehicle {
  constructor(model) {
    super("Car"); // Calls Vehicle's constructor
    this.model = model;
  }
}

const landcruiser = new Car("Toyota Landcruiser");
