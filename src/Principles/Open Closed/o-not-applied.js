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

// PROBLEM: We need kiwis to be in the fruit basket

class FruitBasket {
  // SOLUTION 1: We add kiwi in the definition of the class
  #fruits =  ['pineapple', 'apple', 'kiwi'];
  takeFruit(flavor) {
    if (this.#fruits.indexOf(flavor) > -1) {
      console.log('Great success. Now you have a fruit.');
    } else {
      console.log('Epic fail. No fruit for you.');
    }
  }
};

// Main program File
// Main Program requires Cars to be able to stop
const main = () => {
  const fruitsBasket = new FruitBasket();
  fruitsBasket.takeFruit('kiwi');
};

if (require.main === module) main();
