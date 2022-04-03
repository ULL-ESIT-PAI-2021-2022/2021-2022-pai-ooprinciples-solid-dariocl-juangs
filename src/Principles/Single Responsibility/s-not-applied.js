/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc example code that does not apply single responsablity principle
 * @see {@link https://medium.com/@hayreddintuzel/solid-principles-with-examples-12f36f61796c}
 * 
 */

class Car {
  constructor(model, km) {
    this.model = model;
    this.km = km;
   }
 
  run () {
    console.log("running");
  }

  changeOil () {
    console.log("changinOil");
  }
}

const car1 = new Car('BMW', 19000);

car1.run();
car1.changeOil(); // it is not this class' responsibility
