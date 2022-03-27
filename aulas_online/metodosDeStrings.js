let frase = "  A long time ago, in a galaxy far, far away....  "

//.length() >> conta todo o tamanho de uma string;
console.log(frase.length);
//.indexOf() >> vai procurar o que vc colocar como parametro dentro do indexOf dentro da string, caso conter, te retorna o valor, se não retorna -1;
console.log(frase.indexOf("time"));
console.log(frase.indexOf(2));
//.slice() >> vai retornar um pedaço da string de acordo com 2 parametros colocados dentro da função, de conde começa e onde corta;
console.log(frase.slice(2,11));
//.trim() >> remover espaços em branco, antes e depois da peimeira ocorrência de um caractere alfanumérico;
console.log(frase)
console.log(frase.trim());
//.split() >> permite converter uma sting em um array, com um delimitador... o delimitador pode ser qualquer caractere;
console.log(frase.split(","));
console.log(frase);
//.replace() >> permite substituir uma parte do texto por outra, com dois parametros, o primeiro é a porção que vai substituir e a segunda é o que vai ser colocado, substitui apenas a primeira ocorrencia;
let fraseModificada = console.log(frase.replace("far, far away....", "not much away"));
