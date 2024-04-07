const myTests = require('./tdd-functions.js');
const capitalize = myTests.capitalize;
const reverseString = myTests.reverseString;
const calculator = myTests.calculator;
const caesarCipher = myTests.caesarCipher;
const analyzeArray = myTests.analyzeArray;

test('string with first character capitalized', () => {
    expect(capitalize('dogs')).toBe('Dogs');
})

test('input string reversed', () => {
    expect(reverseString('dog')).toBe('god');
})

test('calculator functions', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 4)).toBe(-2);
    expect(calculator.divide(16, 4)).toBe(4);
    expect(calculator.multiply(4, 4)).toBe(16);
})

test('string caesar ciphered', () => {
    expect(
        caesarCipher('Beware the Ides of March.', 7)).toBe('ILDHYL AOL PKLZ VM THYJO.');
    expect(
        caesarCipher("Let's carve him as a dish fit for the gods!", 18, " .,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe("?WG'FNUSEIWNZ !NSFNSNV FZNX GNXBENGZWNYBVFR");
    expect(
        caesarCipher('RFC AYCQYP QFGDR', 2)).toBe('THE CAESAR SHIFT');
    expect(
        caesarCipher('P6PYG9Z5IGM25453J', -11, " .,?!ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")).toBe('EVEN YOU, BRUTUS?');
    expect(caesarCipher('za', -100)).toBe('DE');
})

test('return object with avg/min/max/length of array', () => {
    expect(JSON.stringify(analyzeArray([1, 8, 3, 4, 2, 6]))).toBe('{"average":4,"min":1,"max":8,"length":6}');
})