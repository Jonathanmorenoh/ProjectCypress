/// <reference types="Cypress"/>
describe('Suite name', function(){

    it('check boxes', function(){

        cy.visit('http://demo.automationtesting.in/Register.html');
   
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies');
        
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket');

        cy.get('#checkbox3').uncheck().should('not.be.checked');
 


    })

    it('Skills drop down', function(){

        cy.get('#Skills').select('Android').should('have.value','Android');
        
    })

    it('Multiples option', function(){

        //multiple choices
        cy.get('#msdd').click()

        cy.get('.ui-corner-all').contains('English').click();

        cy.get('.ui-corner-all').contains('Japanese').click();

    })

    it('Contry select', function(){

        cy.get('.select2-selection__arrow').click();

        cy.get('.select2-search__field').type('ind');

        cy.get('.select2-search__field').type('{enter}');

    })
})