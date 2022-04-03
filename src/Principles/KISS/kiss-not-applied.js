/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 01 2022
 * @desc example code that does not apply KISS principle
 *
 */

let distances = [
  { from: 'New York', to: 'Dhaka', distance: 12654},
  { from: 'Sydney', to: 'chittagong', distance: 8858},
  { from: 'Kolkata', to: 'Sylhet', distance: 670}
]

let total = 0
for(let i = 0; i < distances.length; i++){
  if(distances[i].distance < 10000){
    total += distances[i].distance * 0.621371;
  }
}
console.log(total)
