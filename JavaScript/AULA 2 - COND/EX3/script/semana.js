function DiaSemana() {
    const numero = parseInt(prompt("Digite um número de 1 ao 7: "));
    
    let dia;

    switch (numero) {
        case 1:
            dia = "Domingo";
            break;
        case 2:
            dia = "Segunda-Feira";
            break;
        case 3:
            dia = "Terça-Feira";
            break;
        case 4:
            dia = "Quarta-Feira";
            break;
        case 5:
            dia = "Quinta-Feira";
            break;
        case 6:
            dia = "Sexta-Feira";
            break;
        case 7:
            dia = "Sábado";
            break;
        default:
            dia = "Número inválido";
            break;
    }

    alert(`O número corresponde a: ${dia}`);
}

DiaSemana();
