/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 01 2022
 * @desc example code that applies interface segregation principle
 * @see {@link https://blog.bitsrc.io/solid-principles-in-typescript-153e6923ffdb}
 *
 */

interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll implements Shooter, Dancer {
  public shoot(): void {
    console.log('Shooting');
  }
  
  public dance(): void {
    console.log('Dancing');
  }
}
