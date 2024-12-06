lista_categorias = []

class Categoria {
    constructor(titulo,img,desc,marca){
        this.titulo = titulo
        this.img = img
        this.desc = desc
        this.marca = marca
    }
}

lista_categorias.push(new Categoria('Jack & Coke','image/preto.jpg','mais diversos sucos! Laranja, morango e muito mais.','Suco feito por @Marca'))
lista_categorias.push(new Categoria('Aperol Spritz','image/aperol.jpg','O Aperol Spritz é um drink de origem italiana que ficou conhecido em toda a Europa como a bebida do verão. Logo o Aperol Spritz chegou ao Brasil e não demorou para conquistar o nosso paladar. :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Gin Tônica','image/gin.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Dry Martini','image/dry.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Marquerita','image/marguerita.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Negroni','image/negroni.jpg','O Negroni é considerado um dos mais famosos coquetéis italianos no mundo. Inventado em 1919 pelo Conde Negroni, que pediu para adicionarem um toque de gin em vez de água com gás ao seu Americano.:)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Whisky','image/whisky.jpg','Refrigerante top :)','refri feito por @Marca'))
lista_categorias.push(new Categoria('Moscow Mule','image/moscow.jpg','Refrigerante top :)','refri feito por @Marca'))

lista_categorias.forEach(categoria => {
    document.querySelector('#categoriaItems').innerHTML += `
    
    <div class="card mb-3" style="max-width: 540px; background-color: black;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${categoria.img}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body text-white"> <!-- Adicionando a classe text-white aqui -->
                <h5 class="card-title">${categoria.titulo}</h5>
                <p class="card-text">${categoria.desc}</p>
                <p class="card-text">
                    <small class="text-white">${categoria.marca}</small> <!-- Alterando a cor da marca para branco -->
                </p>
            </div>
        </div>
    </div>
</div>


    
    `
});