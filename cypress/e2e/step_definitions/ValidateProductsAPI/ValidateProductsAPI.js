import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

let productNames = [];
let resp;

Given("que eu consultei um produto na API de produtos", () => {
    cy.request({
        method: 'GET',
        url: 'https://www.advantageonlineshopping.com/catalog/api/v1/products/search',
        qs: {
            name: 'Laptop',
            quantityPerEachCategory: -1
        }
    }).then((response) => {
        resp = response;
    })
})

When("eu recebo o retorno 200 OK da API", () => {
    expect(resp.status).to.eq(200);
})

Then("eu valido se o retorno contem somente produtos referentes a minha pesquisa", () => {
    const products = resp.body[0].products;

    if(products && products.length > 0){
       products.forEach((product) => {

        const productName = product.productName;

        productNames.push(productName);
        expect(productName).to.contain("Laptop")
        
    });
  } else {
      cy.log('Nenhum produto encontrado para esta busca.')
  }
})