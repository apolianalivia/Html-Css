//Dom
const horas = document.querySelector('#hora')
const minutos = document.querySelector('#minuto')
const segundos = document.querySelector('#segundo')

//Eventos
setInterval(oclok,1000)
//Funções
function oclok(){
    let today = new Date()
    let time = today.getHours()
    let minutes = today.getMinutes()
    let second = today.getSeconds()

    if (time<10){
        time="0" +time
    }
    if (minutes<10){
        minutes="0" +minutes
    }
    if (second<10){
        second="0" +second
    }
    horas.textContent = time
    minutos.textContent = minutes
    segundos.textContent = second
}
