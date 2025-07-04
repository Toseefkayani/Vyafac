describe('Vyafac Login - Positive Test', () => {
    const timestamp = Date.now();
    const testEmail = `john.doe.${timestamp}@example.com`; // auto-generated email

    beforeEach(() => {
        cy.visit('https://app.vyafac.com/login');
    });

    it('should successfully login with valid credentials and create a customer', () => {
        // Login
        cy.get('input[id="1"]').type('touseef@rev9solutions.com');
        cy.get('input[id="2"]').type('shipAmount@2338');
        cy.get('button').contains('Login').click();

        cy.wait(10000);
        cy.get('a[href="/customers"]').click();

        // Create customer
        cy.get('button').contains('Add new customer').click();
        cy.get('input[placeholder="Enter your  name"]').type('John Doe');
        cy.get('input[placeholder="Enter your email"]').type(testEmail);
        cy.get('input[id="phone"]').type('2015550123');
        cy.get('textarea[placeholder="Description..."]').type('Test customer for Stripe integration');
        cy.contains('Next').click();

        // Step 2: Payment Info
        cy.get('input[placeholder="Enter cardholder name"]').type('John Doe');
        cy.get('input[placeholder="**** **** **** ****"]').type('4242424242424242');
        cy.get('input[placeholder="Value"]').type('123 Test Ave');
        cy.get('input[placeholder="MM/YY"]').type('12/30');
        cy.get('input[placeholder="***"]').type('123');

        cy.get('input[id="state"]').click().type('California{enter}');
        cy.get('input[id="city"]').click().type('Acton{enter}');
        cy.get('input[placeholder="Enter zip code"]').type('90001');

        cy.get('button').contains('Add customer').click();
        cy.wait(2000);

        // Assert success message
        cy.contains('Customer created successfully').should('be.visible');
        cy.get('a[class="ant-dropdown-trigger"]').first().click();
        cy.contains('Delete').click();
        cy.wait(2000);
        cy.get('button').contains('Delete').click();
        cy.contains('Customer(s) deleted successfully').should('be.visible');

    });
});
