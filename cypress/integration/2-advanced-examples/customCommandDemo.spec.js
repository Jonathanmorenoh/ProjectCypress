///<reference types="Cypress"/>
describe('CustomSuite', function(){


    it('Login Test', function(){

        //Login script

        cy.login('admin@yourstore.com','admin');
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration');
        
    /*    *****ESTE BLOQUE DE SCRIPT SERA SUSTITUIDO POR EL CUSTOM COMMAND*****
        cy.visit('https://admin-demo.nopcommerce.com/login');
        cy.get('#Email').should('be.visible').clear().type(email);
        cy.get('#Password').should('be.visible').clear().type(password);
        cy.get('.button-1').click();
    
    */
    })

    it('Add customer', function(){

        //Script for adding new customer

            cy.log('Adding customer..........');
    })

    it('Edit customer', function(){

        //Script for editing customer

        cy.log('Editing customer........')

    })
})