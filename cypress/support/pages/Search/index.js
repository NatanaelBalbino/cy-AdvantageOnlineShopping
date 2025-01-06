const el = require('./elements.js').ELEMENTS;

class Search {
    validaProdutosPesquisados(){
        cy.get(el.titleResult).contains('Laptop')
    }
    clicarEmProduto(){
        cy.get(el.product1).click()
    }
}

export default new Search();