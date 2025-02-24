/*
If pode ser usado sozinho
Sempre que utilizo a palavra Else, eu prefiro de um if antes
Eu posso ter vários else ifs na checagem
Só posso ter um else na checagem
Podemos usar condições sem else if, utilizando paenas if e else
*/

const tenhoGrana = NaN;

if (tenhoGrana){
    console.log('Vou sair de casa');
}else if (tenhoGrana === false){
    console.log('Não vou sair de casa')
}else {
    console.log('Um bug?')
}