const somarr = (nA, nB)=> nA + nB;
/*const calculadora = (nA, nB, operacao) => operacao(nA, nB);
console.log(calculadora(10,20, somar));

let diminuindo = (nA,nB, operacao) => operacao(nA, nB);

console.log(diminuindo(20,10 ,(nA,nB) => nA - nB));*/


//tipos de callback
// ANÔNIMA :

setTimeout (function(){
    console.log('Hello There!')
} , 1000);

//DEFINIDA
let meuCallback = () => console.log('Hello there!');
   setTimeout(meuCallback,1000)
//


function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}
function saudar(nome, sobrenome, callback){
    return 'Olá ' + callback(nome, sobrenome) 
}

console.log(saudar('Davi', 'Nogueira', nomeCompleto));



/*let dobro = (numeroA) => numeroA * 2;
let triplo = (numeroA) => numeroA * 3;

let aplicar = (numeroA, dobro) =>{
    return dobro(numeroA);
} 
console.log(aplicar(7, dobro));*/ 
function dobro(numeroA){
    return numeroA * 2
}
function triplo(numeroA){
    return numeroA * 3 
}

function aplicar(numeroA, dobro){
    return dobro(numeroA)
}
console.log(aplicar(7, dobro))
//
//
function somar(numberA, numberB){
    return numberA + numberB;
}
function diminuir(numberA, numberB){
    return numberA - numberB;
}
function multiplicar(numberA, numberB){
    return numberA * numberB;
}
function dividir(numberA, numberB){
    return numberA / numberB
}
function calculadora(numberA,numberB, dividir){
    return dividir(numberA,numberB)
}
console.log(calculadora(5,5, dividir))
///


const adicionarHttp = (endereco)=> {return 'http://' + endereco}

console.log(adicionarHttp('facebook.com'));

let sites = [
    'facebook.com',
    'youtube.com',
    'twiter.com'
]
const processar = (array, adicionarHttp) => {
    return adicionarHttp(sites)
}
processar(sites)








function adicionarHttp(url){
    let retornoHttp = 'http://' + url;
    return retornoHttp;
}
function processar(arrayUrl,adicionarHttp){
    let retornoMap = arrayUrl.map((arrayAtual)=>{ 
       console.log(adicionarHttp(arrayAtual))
    })
        return retornoMap
    }
processar(["www.google.com","www.yahoo.com"], adicionarHttp)