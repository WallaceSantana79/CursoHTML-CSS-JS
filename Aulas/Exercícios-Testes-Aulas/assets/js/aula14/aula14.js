let num1 = 10.5143;
let num2 = 2.5;

console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num1.toString(2)); //Versão binária
console.log(num1.toFixed(2)); // Arredondar
console.log(Number.isInteger(num1)); // Para descobrir se é um número inteiro
let temp = num1 * 'Olá';
console.log(Number.isNaN(temp));

// IEEE 754-2008

let num3 = 0.7; //number
let num4 = 0.1 //number

// console.log(num3 + num4)

// num3 += num4;
// num3 += num4;
// num3 += num4;

// console.log(num3); // O JS tem um certo erro com números floats
// // num3 = num3.toFixed(2); // Utilizando esse comando 
// // console.log(num3); // até resolve aos nossos olhos
// console.log(Number.isInteger(num3)); // Porém o número em si não está certo
// num3 = Number(num3.toFixed(2)); // Nesse comando sim a conta vai começar a vim certa
// console.log(num3);
// console.log(Number.isInteger(num3)); // E agora o número sim é um inteiro

// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;
// num3 += num4;

// num3 = Number(num3.toFixed(2)); 
// console.log(num3);
// console.log(Number.isInteger(num3));


// Temos outra forma também 
num3 = ((num3*100) + (num4 *100)) /100;
num3 = ((num3*100) + (num4 *100)) /100;
num3 = ((num3*100) + (num4 *100)) /100;

console.log(num3);
console.log(Number.isInteger(num3));