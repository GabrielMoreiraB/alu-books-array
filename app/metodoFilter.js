const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',()=>{filtrarLivros(btn.value)}))


function filtrarLivros(value){
    let livrosFiltrados = livros.filter(livro => livro.categoria == value)
    exibirLivros(livrosFiltrados)
}