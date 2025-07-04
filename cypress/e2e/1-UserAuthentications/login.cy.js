describe('Vyafac Login - Positive Test', () => {
    beforeEach(() => {
        cy.visit('https://app.vyafac.com/login');
    });

    it('should successfully login with valid credentials', () => {
        cy.get('input[id="1"]').type('touseef@rev9solutions.com');
        cy.get('input[id="2"]').type('shipAmount@2338');
        cy.get('button').contains('Login').click();

        cy.wait(10000);

        // Assert post-login redirect or dashboard visibility
        cy.url().should('not.include', '/login');
        cy.contains('Dashboard').should('exist'); // Adjust based on actual dashboard content
    });
});

