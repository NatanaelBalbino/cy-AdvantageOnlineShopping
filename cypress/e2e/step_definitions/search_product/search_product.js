import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../../support/pages/Home'
import Search from '../../../support/pages/Search'

Given("que eu acesso à página inicial do site", () => {
    Home.acessarHome();
})

When("eu digito 'Laptop' no campo de busca", () => {
    Home.consultarNoCampoDePesquisa();
})

Then("devo ver produtos relacionados a 'Laptop' na listagem", () => {
    Search.validaProdutosPesquisados();
})