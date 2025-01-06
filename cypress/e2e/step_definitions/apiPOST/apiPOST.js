// describe('Testar upload de imagem com POST e token de autorização', () => {
//     it('Deve fazer um POST com upload de imagem usando dados do Swagger', () => {
//         // Valores retirados diretamente do Swagger.
//         const userId = 191222447;
//         const source = 'testeAPI';
//         const color = 'black';
//         const productId = 7;
//         const authToken =
//             'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoxOTEyMjI0NDcsInN1YiI6InN0cmluZyIsInJvbGUiOiJBRE1JTiJ9.28Ezg3D_namYndEPhj7ClbEdIwxGB-PVSwJWbZ-Dn9M';

//         const queryParams = {
//           product_id: productId
//         }

//         cy.fixture('laptophp.jpg', 'base64').then((fileContent) => {

//             const fileBlob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg')
//             const fileType = fileBlob.type

//             if (fileType !== 'image/jpeg') {
//                 cy.log('O arquivo não é do tipo correto, favor utilizar um arquivo JPEG!');
//                 expect(fileType).to.eq('image/jpeg');
//                 return;
//             }


//             cy.log('Token:', authToken);
//             cy.log('URL:', `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`);
//             cy.log('Query Params:', queryParams);
//             cy.log('File Content (Base64):', fileContent);

//             cy.request({
//                 method: 'POST',
//                 url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userId}/${source}/${color}`,
//                 qs: queryParams,
//                 form: true,
//                 encoding: 'base64',
//                 headers: {
//                     Authorization: `Bearer ${authToken}`,
//                 },
//                 formData: {
//                     file: {
//                        value: fileBlob,
//                         options: {
//                             filename: 'laptophp.jpg',
//                             contentType: 'image/jpeg',
//                         },
//                    },
//                 },
//            }).then((response) => {
//                 cy.log('Status Code:', response.status);
//                 if (response.status === 200) {
//                     expect(response.status).to.eq(200);
//                     cy.log('Response Body:', response.body);
//                     expect(response.body).to.not.be.empty;
//                     expect(response.body).to.be.an('object');
//                     expect(response.body).to.have.property('success',true);
//                     expect(response.body).to.have.property('id', productId);
//                     expect(response.body).to.have.property('imageColor', color)
//                } else {
//                     cy.log(`Erro na requisição: Status ${response.status}`);
//                    cy.log('Response Body:', response.body);
//                     expect(response.status).to.eq(200);
//                 }
//             });
//         });
//     });
// });