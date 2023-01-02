import { isPrime } from "./oddEvenPrime";
import { isOdd } from "./oddEvenPrime";
import { game } from "./oddEvenPrime";

describe('Odd Even Prime code kata', () => {
  test('Retornar verdadero si son números impares', () => {
    const numbers = [3, 7, 6];
    const result = numbers.map((num)=>isOdd(num))
    const resultExpected = [false, false, true]
    expect(result).toEqual(resultExpected);
  });
  test('Retornar verdadero si son números pares', () => {
    const numbers = [2, 4, 5];
    const result = numbers.map((num)=>isOdd(num))
    const resultExpected = [true, true, false]
    expect(result).toEqual(resultExpected);
  });
  test('Retornar verdadero si es un número primo', () => {
    const numbers = [2, 3, 4];
    const result = numbers.map((num)=>isPrime(num))
    const resultExpected = [true, true, false]
    expect(result).toEqual(resultExpected);
  });
  test('Juego OddEvenPrime', () => {
    const numbers = [2, 3, 7, 8];
    const result = numbers.map((num)=>game(num))
    const resultExpected = ['Prime', 'Even', 'Even', 'Odd']
    expect(result).toEqual(resultExpected);
  });
});