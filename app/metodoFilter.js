const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))


function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value
    let livrosFiltrados = categoria = 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosFiltrados)
}