const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto (diaSemana){
    const diasSemana = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira','sexta-feira','sábado']
    return diasSemana[diaSemana];
}

function getNomeMes (numeroMes){
    const meses = ['janeiro','fevereiro','março', 'abril','maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes];
}
function zeroAESquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes}`+
    ` de ${data.getFullYear()} `+ 
    `${zeroAESquerda(data.getHours())}:${zeroAESquerda(data.getMinutes())}`)
}
h1.innerHTML = criaData(data);