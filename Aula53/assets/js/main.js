const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
]

function preenchePagina () {
    let container = document.querySelector(".container")
    let div = document.createElement("div")

    for (let i=0; i < elementos.length; i++){
        let {tag, texto} = elementos[i]

        let newTag = document.createElement(tag);
        newTag.innerText = texto;
        div.appendChild(newTag)
    }
    container.appendChild(div)
}

preenchePagina()