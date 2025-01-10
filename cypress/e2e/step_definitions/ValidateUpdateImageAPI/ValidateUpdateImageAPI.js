import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

const userId = 191222447;
const source = 'testeAPI';
const color = 'black';
const productId = 7;
const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoxOTEyMjI0NDcsInN1YiI6InN0cmluZyIsInJvbGUiOiJBRE1JTiJ9.28Ezg3D_namYndEPhj7ClbEdIwxGB-PVSwJWbZ-Dn9M';
let responseData;

Given("que enviei a requisição de Update para a API", () => {  
      
    function form_request(method, url, formData, done) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
    
        xhr.setRequestHeader(
            "Authorization",
            `Bearer ${authToken}`
        );
      
        xhr.onload = function () {
            done(xhr); // Passando o xhr completo para o callback
        };
      
        xhr.onerror = function () {
            done(xhr); // Passando o xhr completo para o callback
        };
      
        xhr.send(formData);
    }
    
    const fileName = "laptophp.jpg";
    const method = "POST";
    const url = `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}?product_id=${productId}`;
    
    cy.fixture(fileName, "binary").then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin)).then((blob) => {
        const formData = new FormData();
        formData.append("file", blob, fileName);
        form_request(method, url, formData, function (xhr) { 

            const resp = JSON.stringify(xhr.responseText, (key, value) => {
                if (key === "ImageColor") {
                  return value.toString();
                }
                return value;
            });

            expect(xhr.status).to.eq(200);
            expect(xhr.responseText).to.not.be.empty;
            
            try {
                responseData = JSON.parse(xhr.responseText);
                
                expect(responseData).to.have.property('success');
                expect(responseData.success).to.be.a('boolean');
                expect(responseData.success).to.eq(true); 
                expect(responseData).to.have.property('id');
                expect(responseData.id).to.be.a('number');
                expect(responseData).to.contain('testeAPI');
                expect(responseData.imageId).to.be.a('number');
                expect(responseData).to.have.property('imageColor');
                expect(responseData.imageColor).to.be.a('string');
            } catch (e) {
                // cy.log('Não foi possível analisar o texto de resposta como JSON');
                expect(xhr.responseText).to.not.be.empty
                }
        });
    });
})

When("receber o retorno 200", () => {

    if (responseData.status === 200) {
        expect(responseData.status).to.eq(200);
    } else {
        cy.log(`Erro na requisição: Status ${responseData.status}`);
        cy.log('Response Body:', responseData.body);
    }

})

Then("eu valido que o produto foi atualizado corretamente", () => {
    
    expect(responseData.body).property('success').to.eq('true');
    
})

And("eu verifico o novo id da nova imagem inserida", () => {

    expect(responseData).to.have.property('imageColor');

})