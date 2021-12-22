///<reference types="Cypress"/>
describe('My Test Suite', function(){

    //beforeEach afterEach before after

    before(function(){
        
        cy.log('*****This is SETUP BLOCK****')
        
    })
    
    after(function(){

        cy.log('*****This is TEAR DOWN BLOCK****')
    })

    beforeEach(function(){

        cy.log('*****This is LOGIN BLOCK****')
    })

    afterEach(function(){

        cy.log('*****This is LOGOUT BLOCK****')
    })


    it('Searching', function(){

    })

    it('advanced searching', function(){

    })

    it('Listening products', function(){

    })
})