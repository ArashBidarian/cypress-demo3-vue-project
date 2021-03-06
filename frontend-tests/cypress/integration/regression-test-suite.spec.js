/// <reference types="cypress" />

// This is a Test Suite
describe('Regression test suite', function(){

    // This is a test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')
        //cy.get('div.field:nth-child(1) > input:nth-child(2)')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.title().should('include', 'Testers Hotel')
        cy.contains('Login')


    })

})