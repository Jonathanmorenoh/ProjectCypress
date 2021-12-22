/// <reference types="Cypress"/>
describe('Navigating Pages', function(){
    it('Page change and navigate', function(){
      
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store'); //HOME PAGE

        cy.get('.ico-register').contains('Reg').click();
        cy.title().should('eq','nopCommerce demo store. Register'); //REGISTER PAGE

        cy.go('back'); //RETURN FOR DE BEFORE PAGE
        cy.wait(5000);
        cy.title().should('eq','nopCommerce demo store');

        cy.go('forward'); //GO TO THE AFTER PAGE
        cy.wait(5000);
        cy.title().should('eq','nopCommerce demo store. Register');

    })
})