/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc example code that does not apply open-closed principle
 *
 */

// In another INACCESIBLE file
class Car {
  constructor(model, km) {
    this.model = model;
    this.km = km;
  }

  run () {
    console.log('running');
  }
}

// Main program File
// Main Program requires Cars to be able to stop
const main = () => {
  // Touching the prototype already tells us something is wrong
  Car.prototype.stop = () => {
    console.log('stopped');
  };
  const newCar = new Car();
  newCar.run();
  newCar.stop();
};

if (require.main === module) main();
