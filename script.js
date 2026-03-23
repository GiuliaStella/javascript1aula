// tipos primitivos
//boolean
var boolean = false;

console.log("texto aqui " + boolean + " texto");
//tempate string
console.log(`a variavel ${boolean}  tem o tipo ${typeof(boolean)}`);


var numero = 1;
console.log(`a variavel ${numero}  tem o tipo ${typeof(numero)}`);

// var; //variavel global ou local - valor inicial pode ser nulo
// let; // variavel local de bloco - valor inicial pode ser nulo
// const; // variavel local de bloco - valor inicial e obrigatorio

// var prof = "lucas";
// var prof = 'lucas souza';

//usando variavel global 
var nome = 'lucas';

//usando variavel local
function nomeDafuncao() {
    var sobrenome = 'sousa';
    console.log(sobrenome);

}
console.log(nome);
nomeDafuncao();

//operadores de comparacao
var comparacao = '0'== 0;
console.log(comparacao)

var comparacaoIdentica = '0'=== 0;
console.log(comparacaoIdentica);


//operadores aritmeticos
//+, -, *, /, %, **

var mult = 5 * 9;
console.log(mult);

var divisao = 15 / 3;
console.log(divisao)

//operadores relacionais
//>, <, >=, <=, !=
//maior ou igual

var maiorOuigual = 5 >= 16;
console.log(maiorOuigual);

var diferente = 5 != 8;
console.log(diferente);

//operadores logicos
//&& - E, || - ou, ! - nao
var e = true && true && true;
console.log(e);

var ou = true || false || false;
console.log(ou);

var nao = !true;
console.log(nao);
