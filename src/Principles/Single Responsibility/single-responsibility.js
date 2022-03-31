/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc Example of Single Responsibility Principle when applied
 *
 */

class Car {
  constructor(model, km) {
    this.model = model;
    this.km = km;
  }

  run() {
    console.log("running");
  }
}

class Mechanic {
  changeOil() {
    console.log("changing oil");
  }
}

const car1 = new Car('BMW', 19000);
const mechanic = new Mechanic();

car1.run();
mechanic.changeOil();
