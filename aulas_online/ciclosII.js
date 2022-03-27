// for-in >>> objetos literais
let pessoa = {
    nome: "Davi",
    idade: 21,
    profissao: "Mecânico"
};
for(let prop in pessoa){
    console.log(prop)
    console.log(pessoa[prop])
}
// for-of >>> arrays... sintaxe semelhante ao for-in 


let series = [`Friens`,'The Office', "Two and a Half Man"];
for(let umaSerie of series){
    console.log(umaSerie)
}