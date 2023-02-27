const btnFiltrarLivrosFront = document.getElementById('btnFiltrarLivrosFront');
const btnFiltrarLivrosBack = document.getElementById('btnFiltrarLivrosBack');
const btnFiltrarLivrosDados = document.getElementById('btnFiltrarLivrosDados');

btnFiltrarLivrosFront.addEventListener('click', ()=>{ filtrarLivros(btnFiltrarLivrosFront.value)});
btnFiltrarLivrosBack.addEventListener('click', ()=>{filtrarLivros(btnFiltrarLivrosBack.value)});
btnFiltrarLivrosDados.addEventListener('click', ()=>{filtrarLivros(btnFiltrarLivrosDados.value)});


function filtrarLivros(value){
    let livrosFiltrados = livros.filter(livro => livro.categoria == value)
    console.table(livrosFiltrados)
}