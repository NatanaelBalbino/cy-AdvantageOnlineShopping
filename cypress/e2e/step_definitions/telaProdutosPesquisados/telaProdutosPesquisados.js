import { And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Search from '../../../support/pages/Search'

When("estiver na tela de resultados", () => {
    Search.validaTelaProdutosPesquisados();
})

And("eu seleciono um produto da lista", () => {
    Search.clicarEmProduto();
})

Then("devo ver produtos relacionados a {string} na listagem", (produto) => {
    Search.validaProdutosPesquisados(produto);
})