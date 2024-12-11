// Lista para armazenar as categorias
let lista_categorias = [];

// Definição da classe Categoria
class Categoria {
    constructor(titulo, img, desc) {
        this.titulo = titulo;
        this.img = img;
        this.desc = desc;
    }
}

// Adicionando categorias à lista
lista_categorias.push(new Categoria(
    'WHISKY',
    '../image/CATALOGO/whisky.jpg',
    'Uma combinação clássica de whisky e refrigerante, perfeita para qualquer ocasião.'
));

lista_categorias.push(new Categoria(
    'Aperol Spritz',
    '../image/CATALOGO/gin.jpg',
    'Um drink refrescante e leve, ideal para os dias quentes.'
));

lista_categorias.push(new Categoria(
    'Gin Tônica',
    '../image/CATALOGO/rum.jpg',
    'Refrescante e elegante, o gin tônica é um clássico.'
));

lista_categorias.push(new Categoria(
    'Dry Martini',
    '../image/CATALOGO/vinho.jpg',
    'Um dos drinks mais sofisticados e famosos do mundo.'
));

lista_categorias.push(new Categoria(
    'Marquerita',
    '../image/CATALOGO/vodka.jpg',
    'Tequila, limão e sal: uma combinação irresistível!'
));

lista_categorias.push(new Categoria(
    'Negroni',
    '../image/CATALOGO/bebida.jpg',
    'Um clássico italiano com gin, vermute e Campari.'
));

lista_categorias.push(new Categoria(
    'Whisky',
    '../image/CATALOGO/whisky.jpg',
    'O tradicional whisky servido com gelo.'
));

lista_categorias.push(new Categoria(
    'Moscow Mule',
    '../image/CATALOGO/whisky.jpg',
    'Vodka, ginger beer e limão: uma mistura explosiva de sabores.'
));

lista_categorias.push(new Categoria(
    'Caipirinha',
    '../image/CATALOGO/whisky.jpg',
    'Cachaça e limão: uma mistura refrescante.'
));

lista_categorias.push(new Categoria(
    'Daikiri',
    '../image/CATALOGO/whisky.jpg',
    'Morango, Gin, combinação tropical.'
));

// Exibindo as categorias na página com o título acima da imagem e descrição abaixo
lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card" style="width: 18rem; background-color: black;">
        <h5 class="card-title text-white" style="padding: 10px;">${categoria.titulo}</h5>
        <img src="${categoria.img}" class="card-img-top" alt="${categoria.titulo}" style="height: 350px; width: 100%; object-fit: cover; border-radius: 10px;">
        <p class="card-text text-white" style="padding: 10px;">${categoria.desc}</p>
    </div>
    `;
});


