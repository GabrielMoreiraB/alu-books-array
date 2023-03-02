const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))


function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria);
    exibirLivros(livrosFiltrados);

    if(categoria == 'disponivel'){
        const VT = calculaVT(livrosFiltrados);
        exibirTotalelementoValorTotalalor(VT);
    }
}

function exibirTotalelementoValorTotalalor(item){
    elementoValorTotal.innerHTML =`<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${item}</span></p>
  </div>`
}