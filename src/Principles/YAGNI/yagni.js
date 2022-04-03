/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc example code that applies YAGNI principle
 * 
 */

class Car {
  #km = 0;
  #model = '';
  constructor(model, km) {
    this.#model = model;
    this.#km = km;
  }

  // The only function the program needs
  getPrice() {
    return `${this.#model} costs ${10000 - this.#km}`;
  }
}

/**
 * Main Program (Node)
 */
const main = () => {
  const newCar = new Car('BWM', 1000);
  console.log(newCar.getPrice());
};

if (require.main === module) main();
