///<reference types="cypress"/>

describe('Locators Test Suites', function(){
    it('Verify types of locators', function(){

        cy.visit('https://demo.nopcommerce.com/');

        cy.get('#small-searchterms').type("Apple Macbook Pro 13-inch");
        
        cy.get('#small-search-box-form > .button-1').click();
        
        cy.get('.product-box-add-to-cart-button').click();

        cy.get('#product_enteredQuantity_4').clear().type('3');

        cy.get('#add-to-cart-button-4').click();

        cy.wait(5000)

        cy.get('.cart-label').click();

        cy.wait(3000)

        cy.get('.product-subtotal').contains("$5,400.00");
    })
})