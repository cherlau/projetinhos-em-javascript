let inputAdulto = document.getElementById("adulto")
let inputCrianca = document.getElementById("crianca")
let inputDuracao = document.getElementById("duracao")

console.log(adulto, crianca, duracao)

let resultado = document.getElementById("resultado")

function calc(){

    let adultos = inputAdulto.value
    let criancas = inputCrianca.value
    let duracao = inputDuracao.value

    let carne = duracao < 6 ? (400 * adultos) + (200 * criancas) : (650 * adultos) + (325 * criancas) 
    let cerveja = duracao < 6 ? 1200 * adultos : 2000 * adultos 
    let refri = duracao < 6 ? 1000 * adultos : 1500 * adultos 

    resultado.innerHTML = `<p>Vai precisar de: </p>`
    resultado.innerHTML += `<p>&#127830 ${carne} g de carne </p>`
    resultado.innerHTML += `<p>&#127866 ${cerveja} ml de cerveja </p>`
    resultado.innerHTML += `<p>&#129380 ${refri} ml de refri </p>`
}