/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc example code that aplies open-closed principle
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

// We create a new type of Car
class StoppableCar extends Car {
  constructor(model, km) {
    super(model, km);
  }

  stop() {
    console.log('stopped');
  }
}

// Main program File
const main = () => {
  // Main Program requires Cars to be able to stop
  const newCar = new StoppableCar();
  newCar.run();
  newCar.stop();
};

if (require.main === module) main();
