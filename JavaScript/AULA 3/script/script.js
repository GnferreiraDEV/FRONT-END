// DOM
// URL - LOCATION
// "BOTAO DE VOLTAR - HISTORY"
// "ESTE / CONTEUDO - DOCUMENT"

//window.location.reload()

//window.location = "https://www.google.com

//document.getElementById('catalogo').innerHTML = '<h3>OI</h3>'

function registrarNome(){

    var nome = document.getElementById("inputNome").value;

    var p = document.createElement("p");
        p.textContent = "Meu nome é " + nome + " e eu sou programador!";

    document.getElementById("catalogo").appendChild(p);

}