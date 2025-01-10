import { And } from 'cypress-cucumber-preprocessor/steps'
import Product from '../../../support/pages/Product'

And("clico no botão ADICIONAR AO CARRINHO", () => {

    cy.get('#Description').find('h1').invoke('text').then((textoDoH1) => {
        Cypress.env('produtoTitulo', textoDoH1);
    });

    Product.adicionarProdutoNoCarrinho();
})