import * as readlineSync from 'readline-sync';

let nota1:number = Number(readlineSync.question('Ingresa el valor de la nota #1: '));
let nota2:number = Number(readlineSync.question('Ingresa el valor de la nota #2: '));
let nota3:number = Number(readlineSync.question('Ingresa el valor de la nota #3: '));

const finalNota:number = (nota1 + nota2 + nota3) / 3

 finalNota <= 3.9 ? console.log('Estudie') : console.log('Becado');
 
 