/**
 * 
 * @param { The word which is given as input and is expected to be guessed } originalWord
 * @param {Letters which are guessed by the User already } guessedLetters
 * Ex: originalWord: HUMBLE
 * guessedLetters: ['H', 'M', 'E']
 * 
 * return -> This function would return you a string like this where we have H _ M _  _ E . This string will be returned
 * and can i say this string is in the same format in which we have in our Hangman Game. 
 */
export function getMaskedString(originalWord, guessedLetters) {
    console.log("guessedLetters: ", guessedLetters)
    guessedLetters = guessedLetters.map((letter) => letter.toUpperCase()); // ['h', 'M', 'E'] -> ['H', 'M', 'E']
    
    //const guessedLettersSet = new Set (guessedLetters); // Creation of set will help us in faster searching. Can be done without sets as well for right now

    const result = originalWord.toUpperCase().split("").map((chr) => {
        if(guessedLetters.includes(chr)) {
            return chr;
        } else {
            return "_";
        }
    }); //So technically here we will get an array like this ['H' _ 'M' _  _ 'E']

    return result; // ["H", "_", "M", "_",  "_", "E"]
}