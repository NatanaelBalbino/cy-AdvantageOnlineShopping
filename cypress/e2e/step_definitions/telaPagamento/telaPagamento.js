import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Product from '../../../support/pages/Product'
import ShoppingCart from '../../../support/pages/ShoppingCart'
import OrderPaymant from '../../../support/pages/OrderPayment'

let tituloProdutoPagamento;

Then("o produto que está no carrinho deve aparecer na tela de Pagamentos", () => {
    const tituloDoProduto = Cypress.env('produtoTitulo');
    OrderPaymant.validaProdutosPagamento(tituloDoProduto, tituloProdutoPagamento);
})