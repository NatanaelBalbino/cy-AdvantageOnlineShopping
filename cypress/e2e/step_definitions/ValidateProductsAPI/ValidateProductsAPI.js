import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import ValidateProductsAPI from '../../../support/pages/ValidateProducts_API';

let productNames = [];

Given("que eu consultei um {string} na API", (produto) => {
    ValidateProductsAPI.getProductsSearchAPI(produto);
})

When("eu recebo o retorno 200 OK", () => {
    const resp = Cypress.env('responseProductsSearchAPI');
    expect(resp.status).to.eq(200);
})

Then("eu valido se o retorno contem somente produtos referentes a meu {string}", (produto) => {
    const resp = Cypress.env('responseProductsSearchAPI');
    const products = resp.body[0].products;

    if(products && products.length > 0){
       products.forEach((product) => {

        const productName = product.productName;

        productNames.push(productName);
        expect(productName).to.contain(produto)
        
    });
  } else {
      cy.log('Nenhum produto encontrado para esta busca.')
  }
})