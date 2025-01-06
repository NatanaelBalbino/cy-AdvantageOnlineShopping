const el = require('./elements.js').ELEMENTS;

class OrderPaymant {
    validaProdutosPagamento(tituloDoProduto, tituloProdutoPagamento){
        cy.get(el.divProdutosUsuario).find(el.titleProdutoUsuario).invoke('text').then((textoDoH3) => {
            tituloProdutoPagamento = textoDoH3;
    
            expect(tituloProdutoPagamento).to.not.be.empty;
            expect(tituloDoProduto).to.contain(tituloProdutoPagamento)
        })
    }
}

export default new OrderPaymant();