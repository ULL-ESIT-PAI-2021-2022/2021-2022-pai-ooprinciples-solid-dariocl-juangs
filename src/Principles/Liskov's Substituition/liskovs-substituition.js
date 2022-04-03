/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc example code that does apply liskov substitution principle
 *
 */
'use strict';

class Car {
  constructor(model, km) {
    this.model = model;
    this.km = km;
   }
 
  run () {
    this.km += 5;
    return this.km;
  }
}

class Truck extends Car {
  constructor(model, km) {
    super(model, km);
  }

  run() {
    this.km += 10;
    return this.km;
  }
}

const car = new Car('BMW', 0);
const truck = new Truck('BMW', 0);

console.log(typeof car.run() === typeof truck.run()); // true
