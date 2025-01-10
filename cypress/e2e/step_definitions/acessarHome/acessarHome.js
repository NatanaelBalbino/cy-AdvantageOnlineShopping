import { Given } from 'cypress-cucumber-preprocessor/steps'
import Home from '../../../support/pages/Home'

Given("que eu acesso à página inicial do site", () => {
    Home.acessarHome();
})