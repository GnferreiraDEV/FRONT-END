function Aprovação(){

    const nota = parseFloat(prompt("Digite sua nota: "));

    if(nota >= 7) {

        alert("Você está aprovado!");
        document.write("Você está aprovado!");

    }else{

        alert("Você foi reprovado!");
        document.write("Você está reprovado!");
    }
}

Aprovação();