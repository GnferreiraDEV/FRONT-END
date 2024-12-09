fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`).then((response) =>{
    return response.json()
}).then((data) =>{
    console.log(data)
    document.querySelector('#resultadoDrink').innerHTML += `
    <h1>`
})