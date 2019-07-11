/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - user guessed word
 * @param {string} secertWord - secret word come from word api
 * @returns {number} - Number of letters matched between user guessed word and secretword 
 */

export function getLetterMatchCount (guessedWord, secertWord){
    const secertLetterSet = new Set(secertWord.split(''))
    const guessedLetterSet = new Set(guessedWord.split(''))
    return [...secertLetterSet].filter(letter=>guessedLetterSet.has(letter)).length;
}