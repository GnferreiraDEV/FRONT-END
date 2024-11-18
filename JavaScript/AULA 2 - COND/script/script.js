
alert("Analisador de Idade!");

var nome = prompt("Digite seu nome: ");
var AnoNasc = +prompt("Digite seu ano de nascimento: ");
var AnoAtual = +prompt("Digite o ano atual: ");

var idade = (AnoAtual - AnoNasc);

if( idade >= 18) {

    window.alert(nome+ " você tem "+idade+ " anos e possue a maioridade!")
    document.write(nome+ " você tem "+idade+ " anos e possue a maioridade!")

}else{

    window.alert(nome+ " você tem "+idade+ " anos e não possue a maioridade!")
    document.write(nome+ " você tem "+idade+ " anos e não possue a maioridade!")

}