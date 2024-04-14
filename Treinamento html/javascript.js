/*
let idade;
let nome = 'Luigi';

idade=30;

idade = idade+1;
nome='Luigi';

if (idade >=18){
    console.log('Idade foi permitida com sucesso');
}

else{
    console.log{'Acesso bloqueado'};
}
*/

let primeiroNome;
let nome = false;

console.log(typeof nome);

/*
let false; (Ha variavel false deduz um nome com booleanos entre verdadeiro e falso).
Ha palavra let simboliza que aquela varivel pode ser alterada já a (var),o nome não pode
ser açterado ou sua varivael ele da uma mensagem explicando.
*/


/*
Ha variavel console.log() é como o print do python,porém faz aparecer na tela printando a mensagem
Outra coisa tomar cuidado com letras maiusculas e minusculas,pois o javascript reconhece 
dependendo se digitar errado sendo iguais e minusculas,ou iguais maiusculas pode dar erro.
*/

let idade = 30
let maioridade = idade =>18;

if (maioridade){
    console.log("Esta aprovado")
}

else{
    console.log("infelizmente esta reprovado")
}