const num1 = 5;
const num2 = 10;
const num3 = "5";
const num4 = 2;
let contador = 1;
console.log(`Adição: ${num1 + num2}`); 
console.log(`Concatenação: ${num2 + num3}`); 
console.log(`Subtração: ${num1 - num2}`); 
console.log(`Divisão: ${num1 / num2}`); 
console.log(`Resto da divisão: ${num1 % num2}`); 
console.log(`Multiplicação: ${num1 * num2}`); 
console.log(`Potenciação: ${num2 ** num4}`); 
console.log(`Incremento: ${contador++}`); 
console.log(`Incremento: ${++contador}`); 
console.log(`Decremento: ${contador--}`); 
console.log(`Decremento: ${--contador}`); 

const num5 = 10;
const num6 = Number('5.2'); //parseInt (inteiro), parseFloat(decimais)
console.log(num5+num6);
console.log(typeof num6)