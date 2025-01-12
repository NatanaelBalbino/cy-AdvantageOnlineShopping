import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import postValidateUpdateImage_API from '../../../support/pages/ValidateUpdateImage_API';

Given("que enviei a requisição de Update para a API", () => {
    postValidateUpdateImage_API.validateUpdateImageAPI();
})

When("receber o retorno 200", () => {
    const responseData = Cypress.env('responseData');
    expect(responseData.status).to.eq(200);
    cy.log('STATUS ', responseData.status);
});

Then("eu valido que o produto foi atualizado corretamente", () => {
    const responseData = Cypress.env('responseData');
    expect(responseData.body).to.not.be.empty;
    cy.log('reason ', responseData.body.reason)
});

And("eu verifico o novo id da nova imagem inserida", () => {
    const responseData = Cypress.env('responseData');
    expect(responseData.body).to.have.property('imageColor');
    cy.log('New Image ID ', responseData.body.imageId )
    cy.log('New Image Color ', responseData.body.imageColor)
});