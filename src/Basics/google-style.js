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

/** Parent class example */
class ParentClass {
  /**
   * Sample constructor for parent class 
   * @constructor */
  constructor() {
    /** 
     * Protected Field example
     * @protected
     */
    this.protectedField_ = 2;
  }
}

/** Child class example */
class MyClass extends ParentClass {
  /**
   * Private field example 
   * @private
   */
  #privateField = 3;

  /** 
   * Sample constructor for child class
   * @constructor */
  constructor() {
    super();         
    /** 
     * Public field example
     * @public
     */
    this.publicField = 1;
    this.#privateField = 'something else';
  }

  /**
   * Getter for a private attribute
   * @return { * } privateField
   */
  getPrivateField() {
    return this.#privateField;
  }

  /**
   * Changes value of private atribute
   */
  method() {
    this.#privateField = 'Im Private';
  }
}

/**
 * Main program (Node)
 */
function main() {
  const instance = new MyClass;
  instance.method();
  // Ommited protectedField_ variable because it's SUPPOSED to be protected
  // hence, not accesible directly from external code
  console.log(instance.x, instance.getPrivateField());
}

if (require.main === module) main();
