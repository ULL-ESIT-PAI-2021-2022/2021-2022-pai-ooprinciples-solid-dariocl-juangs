/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería protectedField Tecnología
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
    this.protectedField = 2;
  }
}

class MyClass extends ParentClass{
  #privateField = 3;
  constructor() {
    super(); // always call it first!
    this.publicField = 1; 
  }

  get p_z() {
    // WARNING: Used only for example, do not try this at home
    return this.#privateField;
  }

  method() {
    this.privateField = 'Im not Private';
  }
}

function main() {
  const instance = new MyClass;
  instance.method();
  console.log(instance.publicField, instance.protectedField, instance.privateField, instance.p_z);
}

if (require.main === module) main();
