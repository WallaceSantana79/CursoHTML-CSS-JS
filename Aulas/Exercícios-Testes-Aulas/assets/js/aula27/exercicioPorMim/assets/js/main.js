function getDiaSemanaTexto (diaSemana){
    let diaSemanaTexto;
    switch (diaSemana){
        case 0:
        diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = 'Dia da semana inválido!'
            return diaSemanaTexto;
    }
}

function getDiaMesTexto (diaMes){
    let diaMesTexto;
    switch (diaMes){
        case 0:
            diaMesTexto = 'Janeiro';
            return diaMesTexto;
        case 1:
            diaMesTexto = 'Fevereiro';
            return diaMesTexto;
        case 2:
            diaMesTexto = 'Março';
            return diaMesTexto;
        case 3:
            diaMesTexto = 'Abril';
            return diaMesTexto;
        case 4:
            diaMesTexto = 'Maio';
            return diaMesTexto;
        case 5:
            diaMesTexto = 'Junho';
            return diaMesTexto;
        case 6:
            diaMesTexto = 'Julho';
            return diaMesTexto;
        case 7:
            diaMesTexto = 'Agosto';
            return diaMesTexto;
        case 8:
            diaMesTexto = 'Setembro';
            return diaMesTexto;
        case 9:
            diaMesTexto = 'Outubro';
            return diaMesTexto;
        case 10:
            diaMesTexto = 'Novembro';
            return diaMesTexto;
        case 11:
            diaMesTexto = 'Dezembro';
            return diaMesTexto;
        default:
            diaSemanaTexto = 'Dia do mês inválido!'
            return diaMesTexto;
    }
}


const data = new Date();
const diaSemana = data.getDay();
const diaMes = data.getMonth();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
const diaMesTexto = getDiaMesTexto(diaMes);
document.querySelector('.h1').textContent = `${diaSemanaTexto}, ${data.getDate()} de ${diaMesTexto} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;