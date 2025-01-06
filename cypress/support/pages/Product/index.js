const el = require('./elements.js').ELEMENTS;

let titulo

class Product {
    adicionarProdutoNoCarrinho(){
        cy.get(el.botaoAdicionarNoCarrinho).click()
    }
    acessarCarrinhoDeCompras(){
        cy.get(el.botaoCarrinho).click()
    }
}

export default new Product();