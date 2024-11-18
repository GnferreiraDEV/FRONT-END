function calculadpra() {

    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    const operador = prompt("Escolha o perador: (+, -, * ou / ):");

    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
    
        case '-':
            resultado = num1 - num2;
            break;

        case '*':
            resultado = num1 * num2;
            break;

        case '/':
            resultado = num1 / num2;
            break;
        return ;
    }

    alert(`O resultado é: ${resultado} .`);
}
calculadpra();