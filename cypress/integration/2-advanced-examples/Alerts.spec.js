/// <reference types="Cypress" />

describe('Suite name', function(){
    it('Alerts test', function(){
        cy.visit('');
        cy.get().click();
        cy.on('window:alert', function(str){
            expect(str).to.equal('INSERT HERE THE MESSAGE ALERT');
        })
    })
})