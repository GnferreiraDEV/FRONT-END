lista_categorias = [];

class Categoria {
    constructor(titulo, img, desc) {
        this.titulo = titulo;
        this.img = img;
        this.desc = desc;
    }
}

lista_categorias.push(new Categoria(
    'Alien: Romulus',
    'image/filme imagem/alien.jpg',
    'Enquanto exploram as profundezas de uma estação espacial abandonada, um grupo de jovens colonizadores espaciais se depara com a forma de vida mais aterrorizante do universo.'
));

lista_categorias.push(new Categoria(
    'Capitão América: Admirável Mundo Novo',
    'image/filme imagem/capitao.jpg',
    'Após se encontrar com o recém-eleito presidente dos EUA, Thaddeus Ross, Sam se vê no meio de um incidente internacional. Ele deve descobrir o motivo por trás de um plano global nefasto.'
));

lista_categorias.push(new Categoria(
    'Planeta dos Macacos: O Reinado',
    'image/filme imagem/macacos.jpg',
    'O diretor Wes Ball dá nova vida à franquia que se passa em várias gerações no futuro, após o reinado de César, em que os macacos são a espécie dominante, vivendo harmoniosamente e os humanos foram reduzidos a viver nas sombras.'
));

lista_categorias.push(new Categoria(
    'Moana 2',
    'image/filme imagem/moana2.jpg',
    'Em "Moana 2", novo filme musical da Walt Disney Animation Studios, Moana e Maui se reencontram após três anos para uma nova e incrível jornada com um grupo improvável de marujos. Após receber um chamado de seus ancestrais.'
));

lista_categorias.push(new Categoria(
    'Mufasa: O Rei Leão',
    'image/filme imagem/mufasa.jpg',
    'Explorando a improvável ascensão do amado rei das Terras do Reino, "Mufasa: O Rei Leão" convoca Rafiki para contar a lenda de Mufasa à jovem filhote Kiara, filha de Simba e Nala, com Timão e Pumba dando seus toques pessoais.'
));

lista_categorias.push(new Categoria(
    'A Primeira Profecia',
    'image/filme imagem/profecia.jpg',
    'A história se passa quando uma jovem americana é enviada a Roma para começar uma vida de serviço à Igreja e se depara com uma escuridão que a faz questionar sua própria fé.'
));


document.querySelector('#streaming-categorias').innerHTML = `
    <div class="d-flex justify-content-between" style="gap: 30px;">
        <div class="card" style="width: 18rem; background-color: black; color: white;">
            <img src="image/netflix.jpg" class="card-img-top" alt="Alien: Romulus">
            <div class="card-body">
                <h5 class="card-title">DISNEY +</h5>
                <p class="card-text" id="desc-disney" style="display:none;">Disney+ oferece filmes e séries da Disney, Pixar, Marvel, Star Wars e mais, com conteúdo exclusivo para todas as idades. Ideal para toda a família, com opções em HD e 4K.</p>
                <a href="#" class="btn btn-primary" onclick="toggleDescription('desc-disney', event)">Ver mais</a>
            </div>
        </div>
    
        <div class="card" style="width: 18rem; background-color: black; color: white;">
            <img src="image/net.jpg" class="card-img-top" alt="Capitão América: Admirável Mundo Novo">
            <div class="card-body">
                <h5 class="card-title">NETFLIX</h5>
                <p class="card-text" id="desc-netflix" style="display:none;">A Netflix oferece uma vasta seleção de filmes, séries e produções originais, com recomendações personalizadas e opções em HD e 4K.</p>
                <a href="#" class="btn btn-primary" onclick="toggleDescription('desc-netflix', event)">Ver mais</a>
            </div>
        </div>
    
        <div class="card" style="width: 18rem; background-color: black; color: white;">
            <img src="image/prime.jpg" class="card-img-top" alt="Planeta dos Macacos: O Reinado">
            <div class="card-body">
                <h5 class="card-title">PRIME VIDEO</h5>
                <p class="card-text" id="desc-prime" style="display:none;">Prime Video é o serviço de streaming da Amazon, com filmes, séries e produções originais, além de opções de aluguel e compra. Disponível em HD e 4K.</p>
                <a href="#" class="btn btn-primary" onclick="toggleDescription('desc-prime', event)">Ver mais</a>
            </div>
        </div>
    </div>
`;


lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card mb-3" style="max-width: 540px; background-color: black;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${categoria.img}" class="img-fluid rounded-start" alt="${categoria.titulo}">
            </div>
            <div class="col-md-8">
                <div class="card-body text-white">
                    <h5 class="card-title">${categoria.titulo}</h5>
                    <p class="card-text">${categoria.desc}</p>
                </div>
            </div>
        </div>
    </div>
    `;
});


function toggleDescription(id, event) {
   
    event.preventDefault();
    
    const desc = document.getElementById(id);
    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}









