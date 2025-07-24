describe('Task CRUD', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('input[placeholder="Username"]').type('admin');
    cy.get('input[placeholder="Password"]').type('admin');
    cy.contains('Login').click();
  });

  it('should create and delete a task', () => {
    cy.get('input[placeholder="Task title"]').type('New Task');
    cy.contains('Add Task').click();
    cy.contains('New Task').should('exist');
    cy.contains('Delete').click();
    cy.contains('New Task').should('not.exist');
  });
});
