const persona = document.querySelector("#ninguem")
const alegria = document.querySelector("#alegria")
const tristeza = document.querySelector("#tristeza")
const nojinho = document.querySelector("#nojinho")
const raiva = document.querySelector("#raiva")

alegria.addEventListener('click',feliz)
tristeza.addEventListener('click',medo)
nojinho.addEventListener('click',debochada)
raiva.addEventListener('click',furia)

function feliz(){
    persona.src = 'image/02.png'
}

function medo(){
    persona.src = 'image/04.png'
}

function debochada(){
    persona.src = 'image/03.png'
}

function furia(){
    persona.src = 'image/01.png'
}
