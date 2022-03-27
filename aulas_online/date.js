// objeto DATE >>
const data = new Date();


//.getDate() = > retorna o n. do dia do mês de uma data. devolverá entre 1 e 31.

//.getMonth() = > esse retorna o n. do mês entre 0 e 11;

//.getDay() = >  esse retorna o dia da semana entre 0 )domingo, e 6(sábado);

//.getFullYear() => retorna o ano completo e uma data.

// datat dinâmicas 
const nascimento = new Date(2001, 0, 15);


console.log(`hoje o dia da semana é ${data.getDay()+1}`);
console.log(`hoje o dia do mês é ${data.getDate()}`);
console.log(`O mês é ${data.getMonth() + 1}`);
console.log(`O ano é ${data.getFullYear()}`);
console.log(data);


