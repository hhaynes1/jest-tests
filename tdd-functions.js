function capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add(a, b) {
        return a + b;
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    },
}

function caesarCipher(string, key, cipher = null) {
    cipher === null
        ? cipher = [
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
        : cipher = cipher.toUpperCase().split('');

    return string
        .split('')
        .map((char) => {
            if (!cipher.includes(char.toUpperCase())) {
                return char;
            }
            let index = (cipher.indexOf(char.toUpperCase()) + key) % cipher.length;
            index < 0 ? index += cipher.length : null;
            return cipher[index];
        })
        .join('');
}

// function analyzeArray() {

// }

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
};