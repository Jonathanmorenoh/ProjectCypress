///<reference types="Cypress"/>

describe('New Test Suite', function(){
  
    //1) Para uso de Fixtures escribir hook before que incluya el fixture creado

    before(function(){

        cy.fixture('example'/*nombre de la carpeta del fixture*/).then(function(data){

            this.data=data  /*nombre de la function solicitada arriba*/
       
        })
    })



    
    it('Demo fixtures', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login');
        
        cy.get('#Email').should('be.visible').clear().type(this.data.email);//usamos la data proveniente de la fixture
        
        cy.get('#Password').should('be.visible').clear().type(this.data.password);//usamos la data proveniente de la fixture
        
        cy.get('.button-1').click();
    
    })
    
} )