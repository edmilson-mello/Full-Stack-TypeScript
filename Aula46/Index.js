
function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const seg = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);

//const tresHoras = 60 * 60 * 3 * 1000;
//const data = new Date(0 + tresHoras);
//const data = new Date(2019, 3, 20, 15, 14, 27, 500); // ano, mes (começa do 0 então abril é 3), dia, hora, minuto, segundo, milesimo de segundo
/* const data = new Date('2019-04-20 20:20:59');
console.log('Dia ', data.getDate())
console.log('Mês ', data.getMonth())
console.log('Ano ', data.getFullYear())
console.log('Hora ', data.getHours())
console.log('Min ', data.getMinutes())
console.log('Seg ', data.getSeconds())
console.log('Ms ', data.getMilliseconds())
console.log('Dia Semana ', data.getDay()) // 0 - domingo até 6 - sábado
console.log('Data Atual em milesimo de segundos ', Date.now()) // 0 - domingo até 6 - sábado


console.log(data.toString()); */