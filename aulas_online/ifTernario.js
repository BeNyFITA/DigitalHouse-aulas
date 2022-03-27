// if ternario n possui as chaves que delimitam o bloco de código, nem mesmo a palavra if, escrito 100% de forma horizontal, muda apenas em outras condições;

let dia = "terça-feira"
//let resultado = dia == "domingo"? "vou a Praia": "fico em casa";
//console.log(resultado);


function fimDeSemana(dia){
    switch(dia){
        case "segunda-feira":
                console.log('Boa semana!');
        case "terça-feira":
                console.log('Boa semana!');
        case "quarta-feira": 
                console.log('Boa semana!');
        case "quinta-feira":
                console.log('Boa semana!');
        case "sexta-feira" :
                console.log('Boa semana!');
            break;
        case "sabado":
                console.log('Bom fim de semana!');
            break;
        default: 
                console.log('Bom dia!')
}
}

