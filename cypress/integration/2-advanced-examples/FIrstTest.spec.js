///<reference types="cypress"/>
describe('Test Suites', function(){

    it('Test case 1 "Verify title of page positive"', function(){
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
    })
    it('Test case 2"Verify title of page negative"', function(){
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce store');
    })
})


/*

node_modules\.bin\cypress open
node_modules\.bin\cypress run --headless
node_modules\.bin\cypress run --browser chrome

cy.get --> ".class"  "#id"   "[attribute="value"]"

*/