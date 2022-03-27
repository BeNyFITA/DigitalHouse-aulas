let frutas = ['maçã','banana', 'uva'];

let outrasFrutas = ['laranja', 'goiaba'];

let listaCompleta = [ ...outrasFrutas,...frutas];
//
let pessoas = {
    nome:'Davi',
    idade:21,
   
    
}

let maisInfo = {
    tel:"99999999",
    rg: 3216549875,
    ...pessoas,
}
let pessoaCompleta = {

    ...maisInfo
}


function letras(...param){
    console.log(param)
}

letras("a")
letras("b", "c")
//console.log(pessoaCompleta)

