algoritmo "Soma de 4 Números com Enquanto"
// Este algoritmo lê 4 números e imprime a soma total

var

numero, soma, i : inteiro

INICIO


    i <- 1
    soma <- 0

    enquanto i <= 4 faça
    
        escreval("Digite o ", i, "º número: ")
        leia(numero)
        
        soma <- soma + numero
        i <- i + 1
        
    fimenquanto

    escreva("A soma total dos 4 números é: ", soma)
    
fimalgoritmo
