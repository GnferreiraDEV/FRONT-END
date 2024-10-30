algoritmo "ATIVIDADE 3 N1"
// Disciplina   : [Linguagem e Lógica de Programação] 
// Professor   : Antonio Carlos Nicolodi 


var

    peso, excesso, multa: real

inicio

    escreva("Digite o peso de peixes em kg: ")
    leia(peso)
    
escreval("")

    se peso > 50 entao
        excesso := peso - 50
        multa := excesso * 4
    senao
        excesso := 0
        multa := 0
    fimse


    escreval("Excesso: ", excesso, " quilos")
    
escreval("")

    escreval("Multa: R$ ", multa)
    
fimalgoritmo
