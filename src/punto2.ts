import * as readlineSync from 'readline-sync'

let numberCheck:number = Number(readlineSync.question('Ingresa un numero: '))

numberCheck%2 == 0 ? console.log('El número es par') : console.log('El número es impar');

numberCheck > 10 ? console.log('El número es mayor que 10') : console.log('El número es menor que 10');