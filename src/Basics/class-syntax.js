/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc Class syntax example
 *
 */
'use strict';

class ParentClass {
  constructor() {
    this.y = 2;
  }
}

class MyClass extends ParentClass{
  #z = 3;
  constructor() {
    super(); // always call it first!
    this.x = 1; 
  }

  get p_z() {
    // WARNING: Used only for example, do not try this at home
    return this.#z;
  }

  method() {
    this.z = 'Im One of a kind!';
  }
}

function main() {
  const instance = new MyClass;
  instance.method();
  console.log(instance.x, instance.y, instance.z, instance.p_z);
}

if (require.main === module) main();
