/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 03 2022
 * @desc Context for code showing the open-closed principle
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
};

const main = () => {
  const fruitsBasket = new FruitBasket();
  fruitsBasket.takeFruit('kiwi');
};

if (require.main === module) main();
