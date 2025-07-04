describe('Vyafac Signup - Positive Flow with OTP', () => {
  beforeEach(() => {
    cy.visit('https://app.vyafac.com/register');
  });

  it('should successfully sign up with valid inputs and show OTP modal', () => {
    cy.get('input[placeholder="Jhon Dhoe"]').type('John Doe');
    cy.get('input[id="email"]').type('john1@example.com');
    cy.get('input[id="password"]').type('StrongP@ss123');
    cy.get('input[id="password_confirmation"]').type('StrongP@ss123');
    cy.get('button').contains('Sign Up').click();

    // Verify OTP modal appears
    cy.get('.modal-title')
        .should('contain.text', 'Two-Factor Authentication')
        .and('be.visible');

    // Verify OTP input is present
    cy.get('input[placeholder="Enter OTP"]')
        .should('be.visible');

    // Optional: simulate entering OTP
    // cy.get('input[placeholder="Enter OTP"]').type('123456');
    // cy.get('button').contains('Verify').click();
  });
});

// describe('Vyafac Signup - Negative Test Cases', () => {
//   beforeEach(() => {
//     cy.visit('https://app.vyafac.com/register');
//   });
//
//   it('should show errors when submitting empty form', () => {
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Full Name is required').should('exist');
//     cy.contains('Email is required').should('exist');
//     cy.contains('Password is required').should('exist');
//   });
//
//   it('should show error for invalid email format', () => {
//     cy.get('input[id="email"]').type('invalidemail');
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Enter a valid email').should('exist');
//   });
//
//   it('should show error for mismatched passwords', () => {
//     cy.get('input[placeholder="Jhon Dhoe"]').type('John Doe');
//     cy.get('input[id="email"]').type('john@example.com');
//     cy.get('input[id="password"]').type('Password123');
//     cy.get('input[id="password_confirmation"]').type('Password456');
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Passwords do not match').should('exist');
//   });
//
//   it('should show error for short password', () => {
//     cy.get('input[placeholder="Jhon Dhoe"]').type('John Doe');
//     cy.get('input[id="email"]').type('john@example.com');
//     cy.get('input[id="password"]').type('123');
//     cy.get('input[id="password_confirmation"]').type('123');
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Password must be at least 6 characters').should('exist');
//   });
//
//   it('should show error for already registered email', () => {
//     cy.get('input[placeholder="Jhon Dhoe"]').type('John Doe');
//     cy.get('input[id="email"]').type('touseef@rev9solutions.com');
//     cy.get('input[id="password"]').type('StrongP@ss123');
//     cy.get('input[id="password_confirmation"]').type('StrongP@ss123');
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Email already in use').should('exist');
//   });
//
//   it('should show error if full name is only one word', () => {
//     cy.get('input[placeholder="Jhon Dhoe"]').type('Touseef');
//     cy.get('input[id="email"]').type('touseef@test.com');
//     cy.get('input[id="password"]').type('StrongP@ss123');
//     cy.get('input[id="password_confirmation"]').type('StrongP@ss123');
//     cy.get('button').contains('Sign Up').click();
//     cy.contains('Please enter your full name').should('exist');
//   });
// });
