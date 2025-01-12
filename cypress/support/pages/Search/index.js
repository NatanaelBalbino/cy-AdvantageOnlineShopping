const el = require('./elements.js').ELEMENTS;

class Search {
    validaTelaProdutosPesquisados(){
        cy.url().should('include', /search/);
        cy.get(el.titleResult)
    }
    validaProdutosPesquisados(produto){
        cy.get(el.titleResult).contains(produto)
    }
    clicarEmProduto(){
        cy.get(el.product1).click()
    }
}

export default new Search();