/*BASE DE DADOS*/
const apiKey = '12c3bb8b982521a115d85d925712e6bd';
const base_url = 'https://api.themoviedb.org/3';
const capa_url = 'https://image.tmdb.org/t/p/w500';


//DOM
const input = document.getElementById('pesq');
const botao = document.getElementById('botao');
const catalogoFilmes = document.getElementById('catalogo-filmes');

//FUNÇÃO FILME POPULAR
async function filmespopulares() {
    const retorno = await fetch(`${base_url}/movie/popular?api_key=${apiKey}&language=pt-BR`);
    const data = await retorno.json();
    exibirFilmes(data.results);
}

//FUNÇÃO BUSCAR FILME 
async function pesqisaFilme(query) {
    const retorno = await fetch(`${base_url}/search/movie?api_key=${apiKey}&language=pt-BR&query=${query}`);
    const data = await retorno.json();
    exibirFilmes(data.results);
}

//FUNÇÃO EXIBIR FILME NA PESQUISA
function exibirFilmes(filmes) {
    catalogoFilmes.innerHTML = '';
    filmes.forEach(filme => {
        const { title, poster_path, vote_average, overview } = filme;
        const filmeCard = document.createElement('li');
        filmeCard.classList.add('filme-card');

        filmeCard.innerHTML = `
            <div class="filme-poster">
                <img src="${poster_path ? capa_url + poster_path : 'sem-imagem.jpg'}" alt="${title}">
                 <div class="filme-info">
                   <h3 class="filme-titulo">${title}</h3>
                    <span class="avaliacao">${vote_average.toFixed(1)}</span>
                     <div class="conteudo">
                    <p class="resumo">${overview || 'Descrição não disponível.'}</p>
                </div>
            </div>

        `;
        catalogoFilmes.appendChild(filmeCard);
    });
}

//Botão
botao.addEventListener('click', () => {
    const query = input.value.trim();
    if (query) {
        pesqisaFilme(query);
    } else {
        filmespopulares();
    }
});

filmespopulares();