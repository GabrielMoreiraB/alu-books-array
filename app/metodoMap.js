function aplicaDesconto(livros){
    const desconto = 0.3
    livrvosComDesconto = livros.map( item => {
        return{...item, preco: item.preco - (item.preco*desconto)}
    })
    return livrvosComDesconto
}