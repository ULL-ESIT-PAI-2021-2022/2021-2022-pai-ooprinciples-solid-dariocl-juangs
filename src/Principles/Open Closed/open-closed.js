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

// PROBLEM: We need kiwis to be in the fruit basket

class FruitBasket {
  #fruits =  ['pineapple', 'apple'];
  takeFruit(flavor) {
    if (this.#fruits.indexOf(flavor) > -1) {
      console.log('Great success. Now you have a fruit.');
    } else {
      console.log('Epic fail. No fruit for you.');
    }
  }

  // SOLUTION 2: We create a method to add a fruit to the basket
  addFruit(fruit) {
    this.#fruits.push(fruit);
  }
};

// Main program File
// Main Program requires Cars to be able to stop
const main = () => {
  const fruitsBasket = new FruitBasket();
  fruitsBasket.addFruit('kiwi');
  fruitsBasket.takeFruit('kiwi');
};

if (require.main === module) main();
