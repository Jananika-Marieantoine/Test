
describe('ButtonShift_Login', () => {
  it('passes', () => {
    cy.visit('https://dev-fe.buttonshift.com/')
    cy.contains('Sign up').click()
    cy.fixture('Data').then((Data) => {
      //****Enter Email****
      cy.xpath("//input[contains(@class,'MuiInput-input')]").type(Data.Email);
      cy.xpath("(//button[contains(@class,'MuiButtonBase-root')])[23]").click();
      cy.wait(1000);     
      //****Enter Password****
      cy.get('[data-cy="auth-password-input"]').type(Data.Password);
      cy.get('[data-cy="auth-login-button"]').click();
      cy.wait(8000);       
      //****Screenshot****
      cy.screenshot("LoginPage");
      


    });
  })
})