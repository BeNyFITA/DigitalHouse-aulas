//string com aspas simples '';
let nome = 'Davi';
console.log(nome);

let sobrenome = "Braga";
console.log(sobrenome);

// nota-se que n muda bosta nenhuma kkkkk;


//inteiro ;
let idade = 21;
console.log(idade);

//decimal ;
let altura =  1.68;
console.log(altura);

//booleanos true ;
let dia_esta_chuvoso = true;
//booleanos false;
let vou_para_a_praia = false;

console.log(dia_esta_chuvoso);
console.log(vou_para_a_praia);


// NaN not a number, valor não numérico;
let naoNumerico = NaN;
console.log(naoNumerico);

// valore null;
let jogadores= null;
console.log(jogadores);

// undefined, não tem valor definido logo de cara, a variavel fica gardada, logo, é só invicar a variável e atribuir um valor a ela ;
let especatadores;
especatadores = 10
console.log(especatadores);


// objeto literal, nele é como se fosse um array, mas n é, fica entre chaves, e se pode 'gerar variaveis dentro das variaveis, por assim dizer, mas nesse caso, n usa mais o igual dentro das chaves, mas sim o dois pontos;

let meuCarro = {
    marca: 'volkswagen',
    modelo: 'polo',
    cor: 'prata'
}
console.log(meuCarro);


// array, se trata de uma lista, um conjunto de valores dentro de uma variavel, que se difere pos posições,  É DIFERENTE DE UM OBJETO LITERAL;
 
let abcdario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(abcdario[2])
// vale lembrar que a contagem começa a partir do 0...;
