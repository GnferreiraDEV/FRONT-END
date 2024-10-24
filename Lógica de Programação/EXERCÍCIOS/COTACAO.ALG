Algoritmo "COTACAO"
// Data atual  : 24/10/2024


Var
// Seção de Declarações das variáveis

cotacaoDolar, valorDolares, valorReais : real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

escreval("Digite a cotação do dólar: ")
leia(cotacaoDolar)


escreval("Digite o valor em dólares: ")
leia(valorDolares)


valorReais := valorDolares * cotacaoDolar


escreval("O valor em reais é: ", valorReais)


Fimalgoritmo