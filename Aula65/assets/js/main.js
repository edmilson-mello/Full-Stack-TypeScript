inputTarefa = document.querySelector('.input-tarefa');
btnTarefa = document.querySelector('.btn-tarefa');
tarefas = document.querySelector('.tarefas');

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('btn-tarefa')) {
        if(!inputTarefa.value) {
            return;
        }
        criaTarefa(inputTarefa.value)
    }

    if(el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas()
    }
})

document.addEventListener('keypress', function(e){
    const el = e.target;

    if(el.classList.contains('input-tarefa') && e.code === "NumpadEnter") {
        if(!inputTarefa.value) {
            return;
        }
        criaTarefa(inputTarefa.value)
    }
})

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

function criaLi() {
    const li = document.createElement('li');
    return li
}

function criaTarefa (textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li)
    salvarTarefas()
    limpaInput();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);    
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas()
