import { Given } from 'cypress-cucumber-preprocessor/steps';

const userId = 191222447;
const source = 'testeAPI';
const color = 'red';
const productId = 7;
const authToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoxOTEyMjI0NDcsInN1YiI6InN0cmluZyIsInJvbGUiOiJBRE1JTiJ9.28Ezg3D_namYndEPhj7ClbEdIwxGB-PVSwJWbZ-Dn9M';
const queryParams = {
  product_id: productId
}
let responseData = {};

Given("que enviei a requisição de Update para a API", () => {
    const fileName = "laptophp.jpg";

    cy.fixture(fileName, "binary")
        .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin, 'image/jpeg'))
        .then((blob) => {
            var formData = new FormData();

            formData.append("file", blob, fileName);

            cy.log(blob.type)

            cy.request({
                method: 'POST',
                url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
                qs: queryParams,
                log: true,
                failOnStatusCode: false,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
                body: formData
            }).then((response) => {
               const bodyString = String.fromCharCode.apply(null, new Uint8Array(response.body));
               const parsedBody = JSON.parse(bodyString);

               responseData = {
                    status: response.status,
                    body: parsedBody
               };
           });
        });
})

When("receber o retorno 200", () => {
    expect(responseData.status).to.eq(200);
    cy.log('STATUS ', responseData.status);
});

Then("eu valido que o produto foi atualizado corretamente", () => {
    expect(responseData.body).to.not.be.empty;
    cy.log('reason ', responseData.body.reason)
});

And("eu verifico o novo id da nova imagem inserida", () => {
    expect(responseData.body).to.have.property('imageColor');
    cy.log('New Image ID ', responseData.body.imageId )
    cy.log('New Image Color ', responseData.body.imageColor)
});