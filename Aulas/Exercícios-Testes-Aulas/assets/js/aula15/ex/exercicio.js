const numero = Number(prompt("Digite um número: "));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada: ${numero ** (1/2)}<p>
<p>${numero} é inteiro? ${Number.isInteger(numero)}<p>
<p>É NaN? ${Number.isNaN(numero)}<p>
<p>Arredondado para baixo: ${Math.ceil(numero)}<p>
<p>Arredondado para cima: ${Math.floor(numero)}<p>
<p>Com duas casas decimais: ${numero.toFixed(2)}<p>`
