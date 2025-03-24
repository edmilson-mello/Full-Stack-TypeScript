const h1 = document.querySelector(".value h1");
const data = new Date();

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short',
};
 
h1.innerHTML = new Intl.DateTimeFormat('pt-BR', opcoes).format(data);