import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../../support/pages/Home'
import Search from '../../../support/pages/Search'
import Product from '../../../support/pages/Product'
import ShoppingCart from '../../../support/pages/ShoppingCart'

let titulo, tituloProdutoCarrinho;

Given("que eu pesquisei um produto", () => {
    Home.acessarHome();
    Home.consultarNoCampoDePesquisa();
    Search.validaProdutosPesquisados();
})

When("eu seleciono um produto da lista", () => {
    Search.clicarEmProduto();
})

And("clico no botão 'ADICIONAR AO CARRINHO'", () => {

    cy.get('#Description').find('h1').invoke('text').then((textoDoH1) => {
        titulo = textoDoH1;
    });

    Product.adicionarProdutoNoCarrinho();
})

Then("devo ver o produto no carrinho", () => {
    Product.acessarCarrinhoDeCompras();

    ShoppingCart.validarProdutoNoCarrinho(titulo,tituloProdutoCarrinho);
})