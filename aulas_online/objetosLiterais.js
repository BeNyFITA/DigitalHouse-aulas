let meuPais = {
    nome: "Brasil",
    populacao: 202768562,
    capital: "Brasilia",
    nacinalidade: function(){
        return 'Sou do ' + this.nome;
    },
};
// Métodos >> funções atribuidas como valor a uma chave, e que procuram fazer algo além de ter um simples dado;








console.log(meuPais.nacinalidade());
console.log(`o nome do meu pais é ${meuPais.nome}, sua população é ${meuPais.populacao} , sua capital é ${meuPais.capital} e eu ${meuPais.nacinalidade()}`);
//console.log(meuPais.nacinalidade());




let carro = {
    marca: 'Fiat', 
    modelo: 'Uno',
}
function Carro(valorMarca, valorModelo){
    this.marca = valorMarca;
    this.modelo = valorModelo;
}
console.log(carro);
console.log(new Carro("Fiat","sedan"));
