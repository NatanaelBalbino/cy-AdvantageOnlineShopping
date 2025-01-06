const el = require('./elements.js').ELEMENTS;

class ShoppingCart {
    validarProdutoNoCarrinho(titulo,tituloProdutoCarrinho){
        cy.get(el.divDeProdutosNoCarrinho).find(el.labelTituloDoProduto).invoke('text').then((textoDaLabel) => {
            tituloProdutoCarrinho = textoDaLabel;
            // cy.log('Titulo do Produto:', tituloProdutoCarrinho);
            expect(tituloProdutoCarrinho).to.not.be.empty;
            expect(titulo).to.contain(tituloProdutoCarrinho)
          })
    }

    clicarNoBotaoCheckout(){
        cy.get(el.botaoCheckout).click();
    }
}

export default new ShoppingCart();