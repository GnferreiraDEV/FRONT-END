function testes(){

   
} 

function carregarCatalogo(){
    for (let i = 0; i < 4; i++) { // A condição foi corrigida de 1 < 4 para i < 4
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
            <img src="icons/image/livro1.jpg" alt="">
            <h4>Harry Potter e a Pedra Filosofal</h4>

            <button>
                Adicionar
                <img src="icons/plus.svg" alt="">
            </button>
        </div>
        `;
    }
}
carregarCatalogo();


