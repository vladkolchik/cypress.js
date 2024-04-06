describe('Login Form Tests', () => {
    beforeEach(() => {
      cy.visit('https://login.qa.studio/');
    });
  
    it('Successfully logs in with correct credentials', () => {
        cy.visit('https://login.qa.studio/');
        cy.get('input[name="email"]').type('german@dolnikov.ru');
        cy.get('input[name="password"]').type('iLoveqastudio1');
        cy.get('button[type="submit"]').click();
        cy.get('#exitMessageButton').should('be.visible');
      });
  
    it('Checks the password recovery functionality', () => {
        cy.visit('https://login.qa.studio/');
        cy.contains('Забыли пароль?').click();
        cy.get('input[name="email"]').type('user@example.com');
        cy.get('#exitMessageButton').should('be.visible');
      });
  
    describe('Negative Case Authentication with Incorrect Password', () => {
        it('Fails to log in with incorrect password', () => {
          cy.visit('https://login.qa.studio/');
          cy.get('input[name="email"]').type('german@dolnikov.ru');
          cy.get('input[name="password"]').type('wrongPassword123');
          cy.get('button[type="submit"]').click();
          cy.get('#exitMessageButton').should('be.visible');
        });
  
      describe('Negative Case Authentication with Incorrect Email', () => {
        it('Fails to log in with incorrect email', () => {
          cy.visit('https://login.qa.studio/');
          cy.get('input[name="email"]').type('wrongemail@example.com');
          cy.get('input[name="password"]').type('iLoveqastudio1');
          cy.get('button[type="submit"]').click();
          cy.get('#exitMessageButton').should('be.visible');
        });

      describe('Validation Logic Without "@" in Email', () => {
        it('Fails to log in with email missing "@"', () => {
          cy.visit('https://login.qa.studio/');
          cy.get('input[name="email"]').type('germandolnikov.ru');
          cy.get('input[name="password"]').type('iLoveqastudio1');
          cy.get('button[type="submit"]').click();
          cy.get('#exitMessageButton').should('be.visible');
        });

      describe('Email Lowercase Transformation', () => {
        it('Logs in with email transformed to lowercase', () => {
          cy.visit('https://login.qa.studio/');
          cy.get('input[name="email"]').type('GerMan@Dolnikov.ru');
          cy.get('input[name="password"]').type('iLoveqastudio1');
          cy.get('button[type="submit"]').click();
          cy.get('#exitMessageButton').should('be.visible');
        });
  