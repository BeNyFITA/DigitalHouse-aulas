// var é uma variavel globl;
var nome = 'Davi';

console.log(nome);
// let é uma variavel que só vai ter valor dentro de um bloco {}
{
let nome = 'Gaby';

console.log(nome);
}

// novo bloco de códigos 
if(true){
    let nome = 'Gaby e Davi';
    console.log(nome);
}

const carro = 'Polo';
console.log(carro);
// const é uma constante, logo não é possivel alterar o valor de uma constante, com um valor ja atribuido.