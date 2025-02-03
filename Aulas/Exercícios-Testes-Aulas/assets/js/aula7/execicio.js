const nome = "Luiz Otávio";
const sobrenome = "Miranda"
let idade = 30;
let peso = 84;
let alturaMetros = 1.8;
let IMC = peso/(alturaMetros*alturaMetros)
let anoNascimento = 2025 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${alturaMetros} metros de altura e seu IMC é de ${IMC} \n${nome} nasceu em ${anoNascimento}`)
