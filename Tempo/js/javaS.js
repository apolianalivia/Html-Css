const cidade = document.querySelector('.input-cidade');
const ir = document.getElementById('botao');
const texto_cidade = document.querySelector('.cidade');
const temperatura = document.querySelector('.temp');
const previsao = document.querySelector('.texto-previsao');
const chave = '39acadb8af3627181f04cc253bee083b'
const mensagem = document.querySelector('#mensagem');


ir.addEventListener('click',() => {
   mensagem.textContent = `Buscando cidade....`;

    setTimeout(() => {
        mensagem.textContent = "";
        async function buscar() {
            const nome_cidade = cidade.value
                const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nome_cidade}&appid=${chave}&units=metric&lang=pt_br`)
                    .then(resposta => resposta.json())
                console.log(dados)
                
                if (dados.cod === 200) {
                    mensagem.textContent = `Resultados encontrados para:`;
                    information({
                        texto_cidade: dados.name,
                        temperatura: dados.main.temp,
                        previsao: dados.weather[0].description,
        
                    });
        
                } else {
                   mensagem.textContent = "Por favor, digite uma cidade.";
                }
        }
            buscar();
   }, 2000); 
});


function information(dados) {
    document.querySelector('.cidade').innerHTML = `${dados.texto_cidade}`;
    document.querySelector('.temp').innerHTML = `${dados.temperatura.toFixed(1).toString().replace('.', ',')} °C`;
    document.querySelector('.texto-previsao').innerHTML = `${dados.previsao}`

}


