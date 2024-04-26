export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.brand]() {
    return this;
  }

  cloneCar() {
    const Brand = this.constructor[Symbol.brand];
    return new Brand();
  }
}
