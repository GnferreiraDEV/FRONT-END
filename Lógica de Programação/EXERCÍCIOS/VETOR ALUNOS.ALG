Algoritmo "VETOR ALUNOS"
// Data atual  : 31/10/2024



Var
// Seção de Declarações das variáveis

alunos : vetor[1..5] de caractere
i : inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

para i de 1 ate 5 faca
     leia(alunos[i])
fimPara

limpatela()
escreval("----LISTA DE ALUNOS CADASTRADOS----")

para i de 1 ate 5 faca
     escreval("")
     escreval("----------")
     escreval("Aluno(a) ",alunos[i])
     escreval("----------")
     escreval("")
fimPara

 


Fimalgoritmo