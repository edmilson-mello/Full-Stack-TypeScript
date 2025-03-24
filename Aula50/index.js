const pessoa = {
    nome: 'jose',
    sobrenome: 'gomes',
    idade: 25,
    endereco: {
        rua: 'rua 1',
        numero: 25
    }
};
//atribuição via desestruturação de objetos
const { endereco: { rua, numero }, endereco } = pessoa //interessante pois é muito utilizado

console.log(rua, numero, endereco)