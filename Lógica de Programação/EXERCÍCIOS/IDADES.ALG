algoritmo "ClassificacaoNadador"


var

    idade: inteiro
    
    categoria: caractere

inicio


    escreval("Digite a idade do nadador: ")
    leia(idade)

    se (idade >= 5) e (idade <= 7) entao
        categoria := "Infantil A"
    senao
    se (idade >= 8) e (idade <= 11) entao
    categoria := "Infantil B"
    
    senao
    se (idade >= 12) e (idade <= 13) entao
    categoria := "Juvenil A"
    
    senao
    se (idade >= 14) e (idade <= 17) entao
    categoria := "Juvenil B"
    
    senao
    se (idade >= 18) entao
    categoria := "Adultos"
    
    senao
    categoria := "Idade n�o v�lida"
    
    fimse
    fimse
    fimse
    fimse
    fimse

    escreval("A categoria do nadador �: ", categoria)
    
fimalgoritmo


