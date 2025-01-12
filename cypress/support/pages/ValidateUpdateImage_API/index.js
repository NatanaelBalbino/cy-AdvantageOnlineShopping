class  postValidateUpdateImage_API {
    validateUpdateImageAPI() {
        const userId = 191222447;
        const source = 'testeAPI';
        const color = 'red';
        const productId = 7;
        const authToken =
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjoxOTEyMjI0NDcsInN1YiI6InN0cmluZyIsInJvbGUiOiJBRE1JTiJ9.28Ezg3D_namYndEPhj7ClbEdIwxGB-PVSwJWbZ-Dn9M';
        const queryParams = {
        product_id: productId
        }
        const fileName = "laptophp.jpg";

        cy.fixture(fileName, "binary")
            .then((txtBin) => Cypress.Blob.binaryStringToBlob(txtBin, 'image/jpeg'))
            .then((blob) => {
                var formData = new FormData();

                formData.append("file", blob, fileName);

                cy.log(blob.type)

                cy.request({
                    method: 'POST',
                    url: `${Cypress.env('baseURL_API')}/product/image/${userId}/${source}/${color}`,
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

                Cypress.env(
                    'responseData', {
                        status: response.status,
                        body: parsedBody
                    });
            });
            });
        }
}

export default new postValidateUpdateImage_API();