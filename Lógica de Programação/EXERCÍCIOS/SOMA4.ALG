algoritmo "Soma de 4 N�meros com Enquanto"
// Este algoritmo l� 4 n�meros e imprime a soma total

var

numero, soma, i : inteiro

INICIO


    i <- 1
    soma <- 0

    enquanto i <= 4 fa�a
    
        escreval("Digite o ", i, "� n�mero: ")
        leia(numero)
        
        soma <- soma + numero
        i <- i + 1
        
    fimenquanto

    escreva("A soma total dos 4 n�meros �: ", soma)
    
fimalgoritmo
