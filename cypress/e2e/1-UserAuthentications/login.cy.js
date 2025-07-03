describe('Vyafac Login - Positive Test', () => {
    beforeEach(() => {
        cy.visit('https://app.vyafac.com/login');
    });

    it('should successfully login with valid credentials', () => {
        cy.get('input[type="email"]').type('touseef@rev9solutions.com');
        cy.get('input[type="password"]').type('shipAmount@2338');
        cy.get('button').contains('Login').click();

        // Assert post-login redirect or dashboard visibility
        cy.url().should('not.include', '/login');
        cy.contains('Dashboard').should('exist'); // Adjust based on actual dashboard content
    });
});

