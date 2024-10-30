algoritmo "VencedorDePartida"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 

var
    Time1, Time2: caractere
    golsTime1, golsTime2: inteiro

inicio
    escreval("Digite o nome do primeiro time: ")
    leia(Time1)

    escreval("Digite o nome do segundo time: ")
    leia(Time2)

    escreval("Digite o número de gols marcados pelo ", Time1, ": ")
    leia(golsTime1)

    escreval("Digite o número de gols marcados pelo ", Time2, ": ")
    leia(golsTime2)


    se golsTime1 > golsTime2 entao
        escreval("O vencedor é: ", Time1)
    senao se golsTime2 > golsTime1 entao
        escreval("O vencedor é: ", Time2)
    senao
        escreval("EMPATE")
    fimSe
  fimSe // TA DANDO ERRADOOOOOOOOOOOOOOOOOOO

fimalgoritmo