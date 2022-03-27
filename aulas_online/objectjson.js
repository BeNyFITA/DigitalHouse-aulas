let pessoa = {nome:"Davi", idade:21, altura: 1.68} ;
let json =  JSON.stringify(pessoa);
let newObject = JSON.parse(json);
let listaCompras =[ "pão", "presundo", "queijo"];
let json2 = JSON.stringify(listaCompras);
let jsonObject = '{"nome":"Davi", "idade":21, "altura": 1.68}';
let novoObjeto = JSON.parse(jsonObject);

console.log(json);
console.log(newObject);
console.log(json2);
console.log(json2[4]);
console.log(novoObjeto)