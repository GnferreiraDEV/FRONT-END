lista_categorias = [];

class Categoria {
    constructor(titulo, img, desc, marca, ingredientes){
        this.titulo = titulo;
        this.img = img;
        this.desc = desc;
        this.marca = marca;
        this.ingredientes = ingredientes;
    }
}

lista_categorias.push(new Categoria(
    'Jack & Coke',
    'image/preto.jpg',
    'Uma combinação clássica de whisky e refrigerante, perfeita para qualquer ocasião.',
    '@HELEN',
    [
        '50ml de Suco de limão',
        '150ml de Coca-Cola',
        'Gelo'
    ]
));

lista_categorias.push(new Categoria(
    'Aperol Spritz',
    'image/aperol.jpg',
    'Um drink refrescante e leve, ideal para os dias quentes.',
    '@FERREIRA',
    [
        '60ml de Aperol',
        '90ml de Prosecco',
        '30ml de Água com gás',
        'Fatias de laranja'
    ]
));

lista_categorias.push(new Categoria(
    'Gin Tônica',
    'image/gin.jpg',
    'Refrescante e elegante, o gin tônica é um clássico.',
    '@DUDA',
    [
        '50ml de Gin',
        '150ml de Água tônica',
        'Fatias de limão',
        'Gelo'
    ]
));

lista_categorias.push(new Categoria(
    'Dry Martini',
    'image/dry.jpg',
    'Um dos drinks mais sofisticados e famosos do mundo.',
    '@RARYSSON',
    [
        '60ml de Gin',
        '10ml de Vermute seco',
        'Azeitona ou casca de limão para decorar'
    ]
));

lista_categorias.push(new Categoria(
    'Marquerita',
    'image/marguerita.jpg',
    'Tequila, limão e sal: uma combinação irresistível!',
    '@JUAN',
    [
        '50ml de Tequila',
        '30ml de Triple Sec',
        '20ml de Suco de limão fresco',
        'Sal para a borda do copo',
    ]
));

lista_categorias.push(new Categoria(
    'Negroni',
    'image/negroni.jpg',
    'Um clássico italiano com gin, vermute e Campari.',
    '@WILL',
    [
        '30ml de Gin',
        '30ml de Vermute doce',
        '30ml de Campari',
        'Casca de laranja para decorar'
    ]
));

lista_categorias.push(new Categoria(
    'Whisky',
    'image/whisky.jpg',
    'O tradicional whisky servido com gelo.',
    '@MARIA',
    [
        '50ml de Whisky',
        'Gelo'
    ]
));

lista_categorias.push(new Categoria(
    'Moscow Mule',
    'image/moscow.jpg',
    'Vodka, ginger beer e limão: uma mistura explosiva de sabores.',
    '@MILENA',
    [
        '50ml de Vodka',
        '100ml de Ginger Beer',
        '10ml de Suco de limão',
        'Fatias de limão e hortelã'
    ]
));

lista_categorias.push(new Categoria(
    'Caipirinha',
    'image/caip.jpg',
    'Cachaça e limão: uma mistura refrescante.',
    '@STELLA',
    [
        '20ml de Limão',
        '100ml de Cachaça',
        'Gelo',
        'Fatias de limão e hortelã'
    ]
));

lista_categorias.push(new Categoria(
    'Daikiri ',
    'image/moran.jpg',
    'Morango, Gin, combinação tropical.',
    '@ROHOD',
    [
        '20ml de Extrato de morango',
        '100ml de Gin',
        'Gelo',
        'Fatias de Morango'
    ]
));

// Inserir as categorias no HTML
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
                    
                    <!-- Botão "Ver Descrição" -->
                    <button id="verDescricao-${categoria.titulo}" class="btn btn-outline-light" onclick="toggleDescricao('${categoria.titulo}')">Ver Descrição</button>
                    
                    <!-- Descrição, inicialmente oculta -->
                    <div id="descricao-${categoria.titulo}" class="descricao" style="display: none;">
                        <p class="card-text">${categoria.desc}</p>
                        <p class="card-text">
                            <strong>Ingredientes:</strong><br>
                            ${categoria.ingredientes.map(ingrediente => `<span>- ${ingrediente}</span><br>`).join('')}
                        </p>
                    </div>
                    
                    <!-- Botão "Fechar Descrição", inicialmente oculto -->
                    <button id="fecharDescricao-${categoria.titulo}" class="btn btn-outline-light" style="display: none;" onclick="toggleDescricao('${categoria.titulo}')">Fechar Descrição</button>

                    <p class="card-text">
                        <small class="text-white">${categoria.marca}</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
});


function toggleDescricao(titulo) {
    const descricao = document.getElementById(`descricao-${titulo}`);
    const verDescricaoBtn = document.getElementById(`verDescricao-${titulo}`);
    const fecharDescricaoBtn = document.getElementById(`fecharDescricao-${titulo}`);
    
    if (descricao.style.display === "none") {
        descricao.style.display = "block";  
        verDescricaoBtn.style.display = "none"; 
        fecharDescricaoBtn.style.display = "inline-block"; 
        fecharDescricaoBtn.innerText = "Fechar Descrição";  
    } else {
        descricao.style.display = "none"; 
        verDescricaoBtn.style.display = "inline-block";  
        fecharDescricaoBtn.style.display = "none";  
        verDescricaoBtn.innerText = "Ver Descrição";  
    }
}
