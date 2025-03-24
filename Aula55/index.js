const frutas = ['fruta 1', 'fruta 2', 'fruta 3']
const pessoa = {
    nome: 'Jose',
    sobrenome: 'joaquim dos anjos',
    idade: 205
};

const nome = 'Luiz Jose';

for (let i in frutas) {  //itera sobre o indice do vetor
    console.log(frutas[i])
}

for (let chave in pessoa) { //itera sobre as chaves do objeto
    console.log(chave)
    console.log(pessoa[chave])
}

//for para objetor iteraveis e pegar o valor direto
for(let valor of nome){
    console.log(valor)
}

for(let valor of frutas){
    console.log(valor)
}

//mais utilizado em franca
frutas.forEach(function(valor, indice, array){
    console.log(valor, indice, array)
})
