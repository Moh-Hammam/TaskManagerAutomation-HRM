describe('Login Tests', () => {
  it('Login with valid credentials', () => {
    cy.visit('/');
    cy.get('input[placeholder="Username"]').type('admin');
    cy.get('input[placeholder="Password"]').type('admin');
    cy.contains('Login').click();
    cy.url().should('include', '/dashboard');
  });

  it('Login with invalid credentials', () => {
    cy.visit('/');
    cy.get('input[placeholder="Username"]').type('wrong');
    cy.get('input[placeholder="Password"]').type('wrong');
    cy.contains('Login').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid credentials');
    });
  });
});
