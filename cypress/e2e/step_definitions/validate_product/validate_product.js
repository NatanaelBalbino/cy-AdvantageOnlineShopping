import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../../support/pages/Home'
import Search from '../../../support/pages/Search'
import Product from '../../../support/pages/Product'
import ShoppingCart from '../../../support/pages/ShoppingCart'

let tituloDoProduto, tituloProdutoCarrinho, tituloProdutoPagamento;

Given("que selecionei produtos", () => {
    
    Home.acessarHome();
    Home.consultarNoCampoDePesquisa();
    
    Search.clicarEmProduto();

    cy.get('#Description').find('h1').invoke('text').then((textoDoH1) => {
        tituloDoProduto = textoDoH1;
    });

})

And("os coloquei no carrinho", () => {
    Product.adicionarProdutoNoCarrinho();

    Product.acessarCarrinhoDeCompras();
    
    ShoppingCart.validarProdutoNoCarrinho(tituloDoProduto,tituloProdutoCarrinho);
})

When("acessar a tela de Pagamento", () => {
    ShoppingCart.clicarNoBotaoCheckout();
})

Then("o produtos que estão no carrinho devem aparecer na tela de Pagamentos", () => {
    cy.get('#userCart').find('h3').invoke('text').then((textoDoH3) => {
        tituloProdutoPagamento = textoDoH3;

        expect(tituloProdutoPagamento).to.not.be.empty;
        expect(tituloDoProduto).to.contain(tituloProdutoPagamento)
    })
})