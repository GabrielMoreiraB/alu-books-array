let livros = [];
const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';


getBuscaLivrosAPI();

async function getBuscaLivrosAPI(){
    const resp = await fetch(endPointAPI);
    livros = await resp.json(); 
    let livrosComDesconto = aplicaDesconto(livros);
    exibirLivros(livrosComDesconto);
}

