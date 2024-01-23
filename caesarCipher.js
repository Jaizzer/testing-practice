export default function caesarCipher(string, shiftFactor) {
    // Initialize the variable to hold the encrypted string.
    let encryptedString = '';

    for (let i = 0; i < string.length; i++) {
        // Only shift letter characters.
        if (string.charAt(i).toLowerCase() >= 'a' && string.charAt(i).toLowerCase() <= 'z') {
            // Check if original character is uppercase.
            let isCharacterUppercase = string.charAt(i) === string.charAt(i).toUpperCase();

            // Coerce character to lowercase and get its code.
            let lowercaseCharCode = string.charAt(i).toLowerCase().charCodeAt(0);

            // Shift the character code.
            let shiftedCharCode = lowercaseCharCode + (shiftFactor % 26);

            // Wrapped back from Z to A.
            if (shiftedCharCode > 'z'.charCodeAt(0)) {
                shiftedCharCode -= 26;
            }

            // Convert the shifted char code back to character.
            let shiftedCharacter = String.fromCharCode(shiftedCharCode);

            // Uppercase letter if it was originally uppercased.
            if (isCharacterUppercase) {
                shiftedCharacter = shiftedCharacter.toUpperCase();
            }

            // Append the shifted character to form the encrypted string.
            encryptedString += shiftedCharacter;
        } else {
            // Don't perform shifting if character is a white space.
            encryptedString += string.charAt(i);
        }
    }
    return encryptedString;
}
