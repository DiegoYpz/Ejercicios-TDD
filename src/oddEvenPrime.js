/**
The OddEvenPrime Kata

Write a program that prints numbers within specified range lets say 1 to 100.
If number is odd print 'Odd' instead of the number.
If number is even print 'Even' instead of number.
Print number as a string, if it does not meet above two conditions, means if number is Prime.
 */

export const game = (num) => {
    if(num != 2){
        if(isOdd(num)){
            return 'Odd'
        }else{
            return 'Even'
        }
    }else{
        return 'Prime';
    }
}

const isPrime = (numb) => {
    //Reconocer los caracteres especiales, no existe división para cero.
      if (numb == 0 || numb == 1 || numb == 4 || numb == 6) return false;
     // Caso contrario realizar la operación para comprobar si es número par.
      for (let x = 2; x < numb / 2; x++) {
          if (numb % x == 0) return false;
      }
      //En caso de no ser, retorna como número primo.
      return true;
}

const isOdd = (number) => {
    //Comprobar que el número no sea par
    if(number % 2 != 0){
        return false
      }
      //En caso de no ser, retorna como número impar.
      return true;
}

export{isOdd, isPrime};