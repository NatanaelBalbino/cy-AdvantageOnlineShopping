import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const userId = 191222447;
const source = 'testeAPI';
const color = 'black';
const productId = 7;
const authToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoxOTEyMjI0NDcsInN1YiI6InN0cmluZyIsInJvbGUiOiJBRE1JTiJ9.28Ezg3D_namYndEPhj7ClbEdIwxGB-PVSwJWbZ-Dn9M';
const queryParams = {
  product_id: productId
}
let resp;

Given("que enviei a requisição de Update para a API", () => {
    cy.fixture('laptophp.jpg', 'base64').then((fileContent) => {

        const fileBlob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg')
        const fileType = fileBlob.type

        if (fileType !== 'image/jpeg') {
            cy.log('O arquivo não é do tipo correto, favor utilizar um arquivo JPEG!');
            expect(fileType).to.eq('image/jpeg');
            return;
        }


        cy.log('Token:', authToken);
        cy.log('URL:', `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`);
        cy.log('Query Params:', queryParams);
        cy.log('File Content (Base64):', fileContent);

        cy.request({
            method: 'POST',
            url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
            qs: queryParams,
            form: true,
            encoding: 'base64',
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
            formData: {
                file: {
                   value: fileBlob,
                    options: {
                        filename: 'laptophp.jpg',
                        contentType: 'image/jpeg',
                    },
               },
            },
       }).then((response) => {
        
        resp = response;

        });
    });
})

When("receber o retorno 200", () => {
    
    // cy.log('Status Code:', resp.status);

    if (resp.status === 200) {
        expect(resp.status).to.eq(200);
    } else {
        cy.log(`Erro na requisição: Status ${resp.status}`);
        cy.log('Response Body:', resp.body);
    }
})

Then("eu valido que o produto foi atualizado corretamente", () => {
    
    // cy.log('Response Body:', resp.body);
    
    expect(resp.body).property('success').to.eq('true');
    
})

And("eu verifico o novo id da nova imagem inserida", () => {
    cy.log((resp.body).property('imageId'));
})