const texto = document.querySelector('#texto')
const botao = document.querySelector('#botao')
const area = document.querySelector('#qrcode')

botao.addEventListener('click',gerar)

function gerar(){
    area.innerHTML = ''
    new QRCode(area,{
        text:texto.value,
        width:350,
        height:350,
        colorLight:'rgb(86, 154, 199)',
        colorDark:'black'
    })
}



