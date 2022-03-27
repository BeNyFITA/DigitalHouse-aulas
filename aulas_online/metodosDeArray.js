// MÉTODOS DE ARRAYS II
//
// .MAP()>>> PERCORRE UM ARRAY E O RETORNA MODIFICADO, MESMO TAMANHO DE VETOR;

const { relativeTimeRounding } = require("moment");

 let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let dobro = (num)=> num.map((cb)=>{
    return  cb*2
})
console.log(dobro(numeros)); 
// .map() depurada: 
/*  let numeros = [1,2,3,4,5,6,7,8,9];
 let dobroDeNumeros = numeros.map(function(num){
    return num * 2 ;
 })
console.log(numeros)
console.log(dobroDeNumeros) */
//
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
// .FIND() >>>>. ESSE MÉTODO TBM RECEBE UMA FUNÇÃO COMO PARÂMETRO, O CALLBACK PRECISA RETORNAR UM BOOLEANO PARA QUE O FIND SIBA QUE ENCONTROU O ELEMENTO ADEQUADO. RETORNA O PRIMEIRO VALOR ACHADO.
//array.find(function(elemento){});
let frutas = ['uva', 'maçã', 'morango',' abacaxi'];
let moraNoMar = frutas.find(function(fruta){
    return fruta ==' abacaxi';
});

// .FILTER()>>>>  ESSE MÉTODO TAMBÉM RECEBE UM PARÂMETRO. DESLOCA O ARRAY E FILTRA O SELEMENTOS DE ACORDO COM UMA CONDIÇÃO QUE EXISTE NO CALBACK. ASSIM COMO O FIND, O CALLBACK PASSADO PARA O FILTER TAMBÉM PRECISA RETORNAR UM BOOLEANO;
// FILTER RETORNA UM NOVO ARRAY, QUE CONTÉM APENAS OS ELEMENTOS QUE ATENDEREM A ESSA CONDIÇÃO;
// array.filter(function(elemento){});
let idades = [3,4,5,13,14,15,24,25,26];
let maior = idades.filter(function(idades){return idades >18})


let maiores  = (num) =>{
    return num.filter((array)=>{ return array>12})
}

console.log(maiores(numeros))
console.log(maior)

//
//.REDUCE>>> ESSE MÉTODO PERCORRE O ARRAY E RETORNA UM UNICO VALOR. RECEBE UM CALLBACK QUE SERÁ EXECUTADO EM CADA ELEMENTO DO ARRAY. ELE POR SUA VEZ RECEBE DOIS PARÂMETROS, UM ACUMULADOR E UM ELEMENTO DE CORRENTE PELO QUAL ESTÁ PASSANDO;
//array. reduce(function(acumulador, elemento){DEFINIMOS O COMPORTAMENTO QUE QUEREMOS});
let soma = numeros.reduce(function(pilha,numero){
    return pilha + numero;
})
console.log(soma);
//
// .FOREACH()>>>> A FINALIDADE DESTE MÉTODO É ITERAR SOBRE UM ARRAY. ELE RECEBE UM CALLBACK COMO PARÂMETRO QUE, AO CONTRARIO DOS MÉDOTOS ANTERIORES NÃO RETORNA NADA.
let paises = ['ARGENTINA', 'BRASIL', 'COLOMBIA'];
paises.forEach(function(pais){
  console.log(pais)
});
paises
console.log(moraNoMar)