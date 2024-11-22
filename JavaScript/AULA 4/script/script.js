function testes(){

   
} 

function carregarCatalogo(){
    // Array de objetos contendo as informações dos livros
    const livros = [
        { imagem: 'icons/image/livro1.jpg', titulo: 'Harry Potter e a Pedra Filosofal' },
        { imagem: 'icons/image/livro2.jpg', titulo: 'Harry Potter e a Câmara Secreta' },
        { imagem: 'icons/image/livro3.jpg', titulo: 'Harry Potter e o Prisioneiro de Azkaban' },
        { imagem: 'icons/image/livro4.jpg', titulo: 'Harry Potter e o Cálice de Fogo' },
        { imagem: 'icons/image/livro5.jpg', titulo: 'Harry Potter e a Ordem da Fênix' },  // Novo livro 1
        { imagem: 'icons/image/livro6.jpg', titulo: 'Harry Potter e o Enigma do Príncipe' },  // Novo livro 2
       
    ];

    for (let i = 0; i < livros.length; i++) {
        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
            <img src="${livros[i].imagem}" alt="Livro ${i + 1}" class="livro-img">
            <h4>${livros[i].titulo}</h4>

            <button>
                Adicionar
                <img src="icons/plus.svg" alt="">
            </button>
        </div>
        `;
    }
}
carregarCatalogo();


let indiceAtual = 0;

function exibirSlide(indice) {
  const carrossel = document.querySelector('.meu-carrossel');
  const totalItens = document.querySelectorAll('.meu-carrossel-item').length;
  
  if (indice >= totalItens) {
    indiceAtual = 0;
  } else if (indice < 0) {
    indiceAtual = totalItens - 1;
  } else {
    indiceAtual = indice;
  }
  
  const deslocamento = -indiceAtual * 100;
  carrossel.style.transform = `translateX(${deslocamento}%)`;
}

function mostrarSlideProximo() {
  exibirSlide(indiceAtual + 1);
}

function mostrarSlideAnterior() {
  exibirSlide(indiceAtual - 1);
}

