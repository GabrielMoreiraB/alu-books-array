let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

const elementoParaIncerirLivros = document.getElementById('livros');

getBuscaLivrosAPI();

async function getBuscaLivrosAPI(){
    const resp = await fetch(endPointAPI);
    livros = await resp.json(); 
    console.table(livros);
    exibirLivros(livros)
}


function exibirLivros(listaDeLivros) {
    listaDeLivros.forEach(function (livro) {
        elementoParaIncerirLivros.innerHTML += `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}"
        alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${(livro.preco).toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
    });
}