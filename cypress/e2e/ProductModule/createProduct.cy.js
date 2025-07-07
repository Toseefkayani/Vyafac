describe('Create Product - Positive Test', () => {
    // Utility to generate random product name
    function generateProductName() {
        return `Product_${Math.random().toString(36).substring(2, 8)}`;
    }
    beforeEach(() => {
        cy.visit('https://app.vyafac.com/login');
    });

    it('should successfully login with valid credentials and create a Product', () => {
        // Login
        cy.get('input[id="1"]').type('touseef@rev9solutions.com');
        cy.get('input[id="2"]').type('shipAmount@2338');
        cy.get('button').contains('Login').click();

        cy.wait(10000);
        cy.get('a[href="/products"]').click();

        // Create customer
        cy.get('button').contains('Add new product').click();

        const productName = generateProductName();

        // Fill the form
        cy.get('input[placeholder="Name"]').type(productName);
        cy.get('input[placeholder="Value"]').type('49.99');

        // Select Recurring
        cy.contains('Recurring').click();

        // Select Billing Period (Monthly)
        //cy.get('input[id="billingPeriod"]').type('Monthly');

        // Include tax in price (No)
        //cy.get('select').eq(1).select('No');

        // Description
        cy.get('textarea[placeholder="Description"]').type('This is a test product for automation.');

        // Submit the form
        cy.contains('button', 'Create Product').click();

        // Assert success toast, message, or redirect — adjust as needed
        cy.contains('Product created successfully').should('be.visible');
    });
});
