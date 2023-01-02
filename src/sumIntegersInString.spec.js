import { sumOfIntegersInString } from "./sumIntegersInString";

describe('Suma de enteros en una cadena de caracteres', () => {
    test('Retornar 19', () => {
      //Los valores encontrados en la palabra son:3, 1, 1, 4 y 10, en donde su suma es 19.
        const value = 'v3r1f1c4c10n';
        const resp = sumOfIntegersInString(value);
        expect(resp).toEqual(19);
      });
      test('Retornar 45', () => {
        //Los valores encontrados en la frase son:
        // - Verificación: 3, 1, 1, 4, 10.
        // - Validación: 4, 1, 4, 10.
        // - De: 3.
        // - Software: 0, 4.
        //Dando una sumatoria de: 45
        const value = 'V3r1f1c4c10nyV4l1d4c10nd3S0ftw4re';
        const resp = sumOfIntegersInString(value);
        expect(resp).toEqual(45);
      });
});
