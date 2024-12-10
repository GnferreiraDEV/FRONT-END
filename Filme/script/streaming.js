// Lista de categorias
let lista_categorias = [];

class Categoria {
    constructor(titulo, img, desc) {
        this.titulo = titulo;
        this.img = img;
        this.desc = desc;
    }
}

// Adicionando as categorias à lista
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

// Gerando os cards na página
lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card" style="width: 18rem; background-color: black; border: none; margin-bottom: 20px;">
        <img src="${categoria.img}" class="card-img-top" alt="${categoria.titulo}">
        <div class="card-body">
            <h5 class="card-title">${categoria.titulo}</h5>
            <p class="card-text">${categoria.desc}</p>
            <a href="#" class="btn btn-primary">Saiba mais</a>
        </div>
    </div>
    `;
});
