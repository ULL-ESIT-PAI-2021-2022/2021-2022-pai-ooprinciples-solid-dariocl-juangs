/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2021-2022
 *
 * @author Dario Cerviño Luridiana
 * @author Juan García Santos
 * @since Apr 01 2022
 * @desc example code that does not apply interface segregation principle
 * @see {@link https://blog.bitsrc.io/solid-principles-in-typescript-153e6923ffdb}
 *
 */

interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}

class BadTroll implements Character {
  public shoot(): void {
    console.log('Shooting');
  }
  
  public swim(): void {
    throw new Error('A troll can\'t swim');
  }

  public talk(): void {
    throw new Error('A troll can\'t talk');
  }

  public dance(): void {
    console.log('Dancing');
  }
}
