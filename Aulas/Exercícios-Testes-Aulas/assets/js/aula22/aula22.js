// console.log('Luiz Otávio' && 0 && 'Maria') // Resumidamente ele vai fazer uma checagem até encontrar o valor de true que vai ser o último "objeto" ou se ele retornar antes é o valor falso. Por isso que ele retorna 0 que é considerado um valor falso como o próprio false, string vazia, null, undefined e NaN. 

// function falaOi () {
//     return 'Oi';
// }

// vaiExecutar = "qualquer coisa";

// console.log(vaiExecutar && falaOi());

// console.log(0 || false || null || 'Luiz Otávio' || true); // O || ele precisa de uma expressão verdadeira para ele retornar uma expressão... verdadeira. Com isso ele retorna justamente "Luiz Otávio" justamente pelo mesmo motivo da expressão && só que dessa vez trabalhando com True. Lembrando que ele pega justamente o primeiro da esquerda para a direita, por isso ele não retornou o true. 

// const corUsuario = null;
// const corPadrao = corUsuario || 'preto';

// console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e);