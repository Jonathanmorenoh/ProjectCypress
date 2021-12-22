/// <reference types="Cypress"/>

describe('Name of the suite test', function(){


    it('Table Test', function(){

        cy.visit('http://testautomationpractice.blogspot.com/');

        //1. Check de value on th table
        cy.get('table[name="BookTable"]').contains('td','Learn Selenium').should('be.visible');

        //2. Check an element in a especific row
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should('be.visible');
  
        //3. Search and find a Autor Amod who write Master in Java
        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e1, index, $list) => {

            const text=$e1.text()
            if(text.includes('Amod')){
            
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bname){

                    const bookName= bname.text()
                    expect(bookName).to.equal("Master In Java")
                })
            }
        })

    })
})