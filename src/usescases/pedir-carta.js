
/**
 * Devuelve el valor de una carta del deck
 * @param {Array<String>} deck 
 * @returns {String} El valor de la carta
 */
export const pedirCarta = (deck) => {
    if (deck.length === 0) {
         throw 'No hay cartas en el Deck';
    }
    return deck.shift();
   }