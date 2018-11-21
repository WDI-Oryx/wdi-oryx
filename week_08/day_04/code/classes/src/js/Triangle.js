import Shape from "./Shape";

export default class Triangle extends Shape {
  constructor(a, b, c) {
    super("Triangle");
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;
  }
}
