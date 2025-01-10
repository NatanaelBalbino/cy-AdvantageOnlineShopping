import { Then } from 'cypress-cucumber-preprocessor/steps'
import ShoppingCart from '../../../support/pages/ShoppingCart'
import Product from '../../../support/pages/Product'


let tituloProdutoCarrinho;

When("acessar a tela de Pagamento", () => {
    Product.acessarCarrinhoDeCompras();
    ShoppingCart.clicarNoBotaoCheckout();
})

Then("devo ver o produto no carrinho", () => {
    const titulo = Cypress.env('produtoTitulo');
    
    ShoppingCart.validarProdutoNoCarrinho(titulo,tituloProdutoCarrinho);
})