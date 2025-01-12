
class ValidateProductsAPI {
    getProductsSearchAPI(produto){
        cy.request({
            method: 'GET',
            url: `${Cypress.env('baseURL_API')}/products/search`,
            qs: {
                name: produto,
                quantityPerEachCategory: -1
            }
        }).then((response) => {
            Cypress.env('responseProductsSearchAPI', response);
        })
    }
}

export default new ValidateProductsAPI();