export default class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHi() {
    console.log(`Hi there! I'm ${this.name}`);
  }
  displayEmail() {
    console.log(`My email is ${this.email}`);
    this.sayHi();
  }
}
