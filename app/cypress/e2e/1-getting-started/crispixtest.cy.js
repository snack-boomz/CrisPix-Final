/// <reference types="cypress" />

describe('Crispix NavBar Testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.get('.navbar > .menu-bars > svg').click()
  })

  it('Navbar Home link navigates to Home page', () => {
    cy.get('.nav-menu-items').contains('Home').click()
    cy.location('pathname').should('include', '/')})

  it('Navbar Trending link navigates to Trending page', () => {
    cy.get('.nav-menu-items').contains('Trending').click()
    cy.location('pathname').should('include', '/trending')})
    
  it('Navbar My Favorites link navigates to My Favorites page', () => {
    cy.get('.nav-menu-items').contains('My Favorites').click()
    cy.location('pathname').should('include', '/myfavorites')})

  it('Navbar About Us link navigates to About Us page', () => {
    cy.get('.nav-menu-items').contains('About Us').click()
    cy.location('pathname').should('include', '/AboutUs')})

      // cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      // cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })

describe('Card Details Navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('Card Details Nav', () => {
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .sc-eCYdqJ > a > .sc-hKMtZM').click()
  })

})

describe('Search Bar Functionality', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    //cy.get('#outlined-basic').click()
  })

  it('should render a search bar and be able to type in it', () => {
    cy.get('.search-bar').type("airplane")
    /*cy.get('<div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.search-bar.css-1q9bed9-MuiFormControl-root-MuiTextField-root>').should('contain', "airplane")*/})

  it('Searches for forest and returns forest pictures', () => {
    cy.get('.search-bar').type("forest")
    cy.get('.sc-dkzDqf li')
    .should('have.length', 2)
  })
})

