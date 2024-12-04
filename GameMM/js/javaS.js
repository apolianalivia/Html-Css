//Aluna:Apoliana Lívia

let pulocount = 0;
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const pulo = () => {
    mario.classList.add('pulo');
    pulocount++;

    document.getElementById('pulo-count').textContent = pulocount;

    setTimeout(() => {
        mario.classList.remove('pulo');

    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'img/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        const gamerOver = document.querySelector('.game-over');
        gamerOver.style.display = 'block';
        
       
        const botao = document.querySelector('#botao');
        const restartIcon = document.querySelector('.restart');
        restartIcon.style.display = 'block';
    
        botao.style.display = 'block';
        botao.addEventListener('click', () => {
            location.reload();
        });

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', pulo);
