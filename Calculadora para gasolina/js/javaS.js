const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const resp = document.querySelector('#resultado')
const botao = document.querySelector('#botao')

botao.addEventListener('click', calcular)

function calcular(){
    n1 = Number(distancia.value)
    n2 = Number(consumo.value)
    n3 = Number(preco.value)

    resposta = n3 * (n1 / n2)

    resultado.textContent = `Total a pagar: R$${resposta.toFixed(2)}`
}