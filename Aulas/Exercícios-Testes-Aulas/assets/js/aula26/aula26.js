// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia);
// const data = new Date(); // ano, mês,dia,hora,minuto,segundo,milisegundo
// const data = new Date('2019-04-20 20:20:59.100');
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth() + 1); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minuto', data.getMinutes());
// console.log('Segundo', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado
// console.log(data.toString())
// console.log(Date.now());

function zeroAESquerda(num){
    return num >= 10 ? num : `0${num}`;
}
function formataData(data) {
    const dia = zeroAESquerda(data.getDate());
    const mês = zeroAESquerda(data.getMonth() + 1);
    const ano = zeroAESquerda(data.getFullYear());
    const hora = zeroAESquerda(data.getHours());
    const minuto = zeroAESquerda(data.getMinutes());
    const segundo = zeroAESquerda(data.getSeconds());

    return `${dia}/${mês}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);