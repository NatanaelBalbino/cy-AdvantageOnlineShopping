const el = require('./elements.js').ELEMENTS;

class Home {
    acessarHome(){
        cy.visit(`${Cypress.env('baseURL_WEB')}`)
        cy.viewport(1368, 1313)
    }
    consultarNoCampoDePesquisa(produto){
            cy.get(el.searchButton).click()
            cy.get(el.searchField).type(`${produto}`).type('{enter}')
    }
}

export default new Home();