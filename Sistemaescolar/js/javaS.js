const one = document.querySelector("#one")
const two = document.querySelector("#two")
const tree = document.querySelector("#tree")
const botao = document.querySelector("#botao")
const resultado = document.querySelector("#resultado")

botao.addEventListener('click',calcular)

function calcular(){
    n1= Number(one.value)
    n2= Number(two.value)
    n3= Number(tree.value)

    media= (n1+n2+n3)/3

    if (media>=5){
        mensagem= 'Aprovado'
    }else{
        mensagem= 'Recuperação'
    }

    resultado.textContent = `A sua média é ${media.toFixed(1)}, você foi ${mensagem}`
}
