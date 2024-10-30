Algoritmo "PetPlace"
// Disciplina   : [Linguagem e Lógica de Programação]
// Data atual  : 24/10/2024

//COMPRA POR QUILO!
//DESCONTO!
//QUANTITATIVO UNIDADE!


Var
// Seção de Declarações das variáveis

opcao : caractere
valorTotal : real


procedimento  adicionaraoCarrinho(vp : real)

           Var

           nomep : caractere

          Inicio
                escreval("Digite o nome do produto: ")
                leia(nomep)
                escreval("Item ", nomep, " adicionado!!")

                valorTotal <- valorTotal + vp
                escreval("Valor total do carrinho R$:", valorTotal)



fimprocedimento



Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...

enquanto(finalizarCarrinho = "n")

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
           adicionaraoCarrinho(15)

    caso "2"
           adicionaraoCarrinho(20)

    caso "3"
           adicionaraoCarrinho(25)

    caso "4"
           adicionaraoCarrinho(30)

    caso "5"
           adicionaraoCarrinho(50)

    caso "6"
         escreval("COMPRA CANCELADA!")
    outrocaso
         escreval("Opção INVÁLIDA!")

fimEscolha

Fimalgoritmo