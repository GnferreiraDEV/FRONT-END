
let lista_categorias = [];


class Categoria {
    constructor(titulo, img, desc) {
        this.titulo = titulo;
        this.img = img;
        this.desc = desc;
    }
}


lista_categorias.push(new Categoria(
    'WHISKY',
    '../image/CATALOGO/whisky.jpg',
    'Um destilado encorpado e amadeirado, ideal para quem aprecia sabores intensos e complexos.'
));

lista_categorias.push(new Categoria(
    'GIN',
    '../image/CATALOGO/gin.jpg',
    'Uma bebida destilada com notas de zimbro e ervas, fresca e aromática, perfeita para coquetéis como o gin tônica.'
));

lista_categorias.push(new Categoria(
    'RUM',
    '../image/CATALOGO/rum.jpg',
    'Uma bebida destilada de cana-de-açúcar, com sabor doce e suave, popular em coquetéis tropicais.'
));

lista_categorias.push(new Categoria(
    'VINHO',
    '../image/CATALOGO/vinho.jpg',
    'Bebida fermentada feita de uvas, com uma vasta gama de sabores que variam de secos a doces, excelente para harmonizações.'
));

lista_categorias.push(new Categoria(
    'VODKA',
    '../image/CATALOGO/vodka.jpg',
    'Destilada e pura, a vodka é uma bebida forte e neutra, ideal para ser misturada com sucos ou ingredientes em coquetéis.'
));

lista_categorias.push(new Categoria(
    'ANGEL´S ENVYY',
    '../image/CATALOGO/bebida.jpg',
    'Whisky bourbon premium, suave e aveludado, com notas de baunilha, caramelo e especiarias.'
));

lista_categorias.push(new Categoria(
    'HARDSHORE',
    '../image/CATALOGO/gin2.jpg',
    'Gin artesanal com toques de frutas e especiarias, ideal para quem busca um sabor mais intenso e marcante.'
));

lista_categorias.push(new Categoria(
    'MAEKER´S MARK',
    '../image/CATALOGO/rum2.jpg',
    'Bourbon whiskey de sabor suave e levemente adocicado, com um final de caramelo e baunilha.'
));

lista_categorias.push(new Categoria(
    'ESPRIT',
    '../image/CATALOGO/vinho2.jpg',
    'Vinho sofisticado com aromas frutados e secos, perfeito para acompanhar pratos gourmet ou ser apreciado sozinho.'
));

lista_categorias.push(new Categoria(
    'SMIRNOFF',
    '../image/CATALOGO/vodka2.jpg',
    'Vodka de alta qualidade, conhecida por sua suavidade e versatilidade, perfeita para diversos coquetéis.'
));



lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    <div class="card" style="width: 18rem; background-color: black; margin-bottom: 20px;">
        <h5 class="card-title text-white" style="padding: 15px; text-align: center;"><strong>${categoria.titulo}</strong></h5>
        <img src="${categoria.img}" class="card-img-top" alt="${categoria.titulo}" style="height: 350px; width: 100%; object-fit: cover; border-radius: 10px;">
        <p class="card-text text-white" style="padding: 15px; margin-top: 10px;">${categoria.desc}</p>
    </div>
    `;
});
