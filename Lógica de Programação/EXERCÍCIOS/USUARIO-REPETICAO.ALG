Algoritmo "USUARIO-REPETICAO"
// Data atual: 29/10/2024

Var
    usuarioC, senhaC, usuario, senha: caractere
    login: logico // Tipo lógico para controle do loop

Procedimento login()
Inicio
    usuarioC <- "adm"
    senhaC <- "umasenhaincrivel"

    login <- falso // Inicializa a variável login como falso

    enquanto (login = falso) faca
        escreval("Digite o usuário:")
        leia(usuario)

        escreval("Digite a senha:")
        leia(senha)

        limpatela()

        se (senha = senhaC) e (usuario = usuarioC) entao
            login <- verdadeiro // Atribui verdadeiro a login
        senao
            escreval("Usuário ou senha incorretos. Tente novamente.")
        fimSe
    fimEnquanto

    limpatela()
    escreval("Login efetuado com sucesso!!")
FimProcedimento

Inicio
    login()
FimAlgoritmo
