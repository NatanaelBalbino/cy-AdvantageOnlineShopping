import { And } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../../support/pages/Home'

And("eu pesquise um {string} no Campo de Busca", (produto) => {
    Home.consultarNoCampoDePesquisa(produto);
});