/**
* Universidad de La Laguna
* Escuela Superior de Ingeniería y Tecnología
* Grado en Ingeniería Informática
* Programación de Aplicaciones Interactivas 2021-2022
*
* @author Dario Cerviño Luridiana
* @author Juan García Santos
* @since Mar 30 2022
* @desc example code that does not apply dependency inversion principle
*
*/

class Wheels {
  constructor(tires) {
    this.tires = tires;
  }
  getTires() {
    return this.tires.join('; ')
  }
}

class Car {
  constructor(model, km, tires) {
    this.model = model;
    this.km = km;
    this.wheels = new Wheels(tires);
  }

  run () {
    console.log('running');
  }

  getInfo() {
    console.log(`Model ${this.model}\nTires: ${this.wheels.getTires()}`);
  }
}

const car1 = new Car('BMW', 19000, ['t1', 't2', 't3', 't4']);

car1.getInfo();
