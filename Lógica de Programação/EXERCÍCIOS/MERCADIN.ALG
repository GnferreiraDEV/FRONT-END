algoritmo "MERCADIN"


var


    nomes: vetor[0..2] de caractere
    valores: vetor[0..2] de real
    total: real
    media: real
    i: inteiro
    
inicio

    para i de 0 ate 2 faca
        escreval("Digite o nome da mercadoria ", i + 1, ": ")
        leia(nomes[i])
escreval()
        escreval("Digite o valor da mercadoria ", i + 1, ": ")
        leia(valores[i])
escreval()
        total <- total + valores[i]
    fimpara
limpatela()
    media <- total / 3
    escreval("Valor total: ", total)
    escreval("Média das mercadorias: ", media)
    
fimalgoritmo
