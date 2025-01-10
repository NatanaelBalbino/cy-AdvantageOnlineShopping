import { When } from 'cypress-cucumber-preprocessor/steps'
import Product from '../../../support/pages/Product'

When("acessar o carinho no canto superior direito", () => {

    Product.acessarCarrinhoDeCompras();

})