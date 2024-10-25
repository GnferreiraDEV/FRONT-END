Algoritmo "PetPlace"
// Data atual  : 24/10/2024

//COMPRA POR QUILO!
//DESCONTO!
//QUANTITATIVO UNIDADE!


Var
// Seção de Declarações das variáveis 

opcao : caractere
valorTotal : real


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

escreval("********Catálogo********")

escreval("")

escreval("1 -- RAÇÃO            R$ 15,00 KG")
escreval("2 -- PETISCOS         R$ 20,00 UN")
escreval("3 -- BRINQUEDOS       R$ 25,00 UN")
escreval("4 -- COLEIRA          R$ 30,00 UN")
escreval("5 -- CASINHA CONFORTO R$ 50,00 UN")

escreval("")
escreval("")

escreval("6 -- CANCELAR")
escreval("7 -- CARRINHO")

leia(opcao)

//switch Case!!

escolha(opcao)
    caso "1"
         escreval("Item RAÇÃO X1 adiconado!")
         valorTotal <- valorTotal + 15
         escreval("Valor total do carrinho R$:", valorTotal)
         
    caso "2"
         escreval("Item PETICOS X1 adiconado!")
         valorTotal <- valorTotal + 20
         escreval("Valor total do carrinho R$:", valorTotal)
         
    caso "3"
         escreval("Item BRINQUEDOS X1 adiconado!")
         valorTotal <- valorTotal + 25
         escreval("Valor total do carrinho R$:", valorTotal)
         
    caso "4"
         escreval("Item COLEIRA X1 adiconado!")
         valorTotal <- valorTotal + 30
         escreval("Valor total do carrinho R$:", valorTotal)
         
    caso "5"
         escreval("Item CASINHA CONFORTO X1 adiconado!")
         valorTotal <- valorTotal + 50
         escreval("Valor total do carrinho R$:", valorTotal)
         
    caso "6"
         escreval("COMPRA CANCELADA!")

fimEscolha
 
Fimalgoritmo