/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 01 2022
 * @desc example code for DRY principle
 * @see {@link https://codinglead.co/javascript/what-is-DRY-code}
 *
 */

let chips = ['corn', 'pita', 'potato', 'tortilla'];

// non DRY code
console.log(chips[0]);
console.log(chips[1]);
console.log(chips[2]);
console.log(chips[3]);

// DRY code
for (let i = 0; i < chips.length; i++) {
  console.log(chips[i]);
}
