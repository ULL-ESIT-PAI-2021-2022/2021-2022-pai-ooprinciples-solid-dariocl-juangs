/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 01 2022
 * @desc example code that applies KISS principle
 * @see {@link https://medium.com/infancyit/kiss-keep-it-simple-smart-javascript-habits-b019ce14b5ec}
 *
 */

let distances = [
  { from: 'New York', to: 'Dhaka', distance: 12654},
  { from: 'Sydney', to: 'chittagong', distance: 8858},
  { from: 'Kolkata', to: 'Sylhet', distance: 670}
]

let total = distances.filter(item => item.distance < 10000)
                     .map(item => item.distance * 0.621371)
                     .reduce((prev, distance) => prev + distance, 0)
console.log(total)
