import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tiposDeCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns  {Array}
 */

export const crearDeck  = (tiposDeCartas,tiposEspeciales) => {
    let deck =[];
     for (let i = 2; i <= 10; i++) {
        for (const tipo of tiposDeCartas) {
            deck.push( i + tipo);
        }
    }
    for (const tipo of tiposDeCartas) {
        for (const esp of tiposEspeciales) {
            deck.push(esp + tipo);   
        }
    }
    return _.shuffle(deck);
  }

  //export default crearDeck;