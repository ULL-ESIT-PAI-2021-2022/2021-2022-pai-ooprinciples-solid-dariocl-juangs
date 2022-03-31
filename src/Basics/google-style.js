/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Mar 30 2022
 * @desc Google Style example
 *
 */
'use strict';

/** */
class ParentClass {
  /** @constructor */
  constructor() {
    this.y_ = 2;
  }
}

/** */
class MyClass extends ParentClass {
  /** @private */
  #z = 3;

  /** @constructor */
  constructor() {
    super(); // always call it first!
    this.x = 1;
    this.z = 'something else';
  }

  /**
   * Getter for a private z
   * @return { * } Z
   */
  getPrivateZ() {
    return this.#z;
  }

  /**
   * changes value of public attribute z
   * does not generate any conflict whatsoever witzh private z
   */
  method() {
    this.z = 'Im One of a kind!';
  }
}

/**
 * Main program (Node)
 */
function main() {
  const instance = new MyClass;
  instance.method();
  console.log(instance.x, instance.z, instance.getPrivateZ());
}

if (require.main === module) main();
