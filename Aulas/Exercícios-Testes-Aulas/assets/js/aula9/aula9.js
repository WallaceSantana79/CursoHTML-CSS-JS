// String, number, undefined, null, boolean
const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; //undefined = Não aponta para nenhum local na memória
const sobrenomeAluno = null; // Nulo = Não aponta para nenhum local na memória
const aprovado = true; // Boolean = True/False (lógico) 

console.log(typeof sobrenomeAluno, sobrenomeAluno);

const a = [1,2];
const b = a;

console.log(a,b);

b.push(3);
console.log(a,b);

let c = 2;
const d = c;
console.log(c,d); // 2,2

c = 3;
console.log(c,d); //3,2