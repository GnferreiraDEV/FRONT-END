Algoritmo "VETOR ALUNOS"
// Data atual  : 31/10/2024



Var
// Se��o de Declara��es das vari�veis

alunos : vetor[1..5] de caractere
i : inteiro


Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...

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