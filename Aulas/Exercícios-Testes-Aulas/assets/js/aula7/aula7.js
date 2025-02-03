// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos.
// Não pode começar uma constante com número
// Não podem conter espaços ou traços
// Padrão de mercado é o calmelCase
// Case-sensitive
// Não utilize var e sim CONST
// Não pode modificar o valor de uma constante

const nome = 'João';
// nome = 'Otávio' // Não pode modificar o valor de uma constante
console.log(nome);

// const teste; // Não se pode fazer isso, precisa declarar um valor. 

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultaDuplicado = resultado*2;
let resultaTriplicado = resultado *3;
console.log("O reusultado é: ",resultado);
console.log("O resultado duplicado sendo: ", resultaDuplicado);
console.log("O resultado triplicado sendo: ", resultaTriplicado);
console.log("O resultado triplicado + 5 sendo: ", resultaTriplicado + 5);

console.log(typeof(primeiroNumero));