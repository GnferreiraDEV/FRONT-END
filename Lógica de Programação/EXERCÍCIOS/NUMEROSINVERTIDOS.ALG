algoritmo "NumerosInvertidos"



var


    numeros: vetor[0..9] de inteiro
    i: inteiro
    
    
inicio


    para i de 0 ate 9 faca
    
        escreva("Digite um número ", i + 1, ": ")
        leia(numeros[i])
    fimpara

escreval()

    escreval("Números invertidos:")
    para i de 9 ate 0 passo -1 faca
        escreval(numeros[i])
    fimpara

fimalgoritmo
