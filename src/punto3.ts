import * as readlineSync from 'readline-sync';

let instensity:number = Number(readlineSync.question('Ingresa el valor de la intensidad de la corriente: '));
let resistence:number = Number(readlineSync.question('Ingresa el valor de resistencia: '));

const voltaje:number = instensity*resistence

console.log(`El voltaje del circuito es de ${voltaje} voltios`);


