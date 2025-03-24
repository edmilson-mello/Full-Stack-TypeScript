const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio()
    }
    
    if(el.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }
    
    if(el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado')
        segundos = 0;
    }
})

function iniciaRelogio() {
    timer = setInterval( function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    },1000)
}

function getTimeFromSeconds (segundos) {
    const data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'GMT'
    });
}

/*
iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado')
    clearInterval(timer);
    iniciaRelogio()
});

pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado')
    clearInterval(timer);
});

zerar.addEventListener('click', function(event) {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    relogio.classList.remove('pausado')
    segundos = 0;
});
*/
