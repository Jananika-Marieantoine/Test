describe('ButtonShift_Signup', () => {
    it('passes', () => {
      cy.visit('https://dev-fe.buttonshift.com/')
      cy.contains('Sign up').click()
      cy.fixture('Data').then((Data) => {
        //****Enter Email****
        cy.xpath("//input[contains(@class,'MuiInput-input')]").type(Data.Email);
        cy.xpath("(//button[contains(@class,'MuiButtonBase-root')])[23]").click();
        cy.wait(1000);
        //****Creating Password****
        cy.get('#mui-3').type(Data.Password);
        cy.wait(1000);
        cy.get('#mui-4').type(Data.Password);
        cy.wait(1000);           
        //****OTP****
        cy.get('[aria-label="Please enter OTP character 1"]').type("1");
        cy.get('[aria-label="Please enter OTP character 2"]').type("2");
        cy.get('[aria-label="Please enter OTP character 3"]').type("3");
        cy.get('[aria-label="Please enter OTP character 4"]').type("4");
        cy.get('[aria-label="Please enter OTP character 5"]').type("5");
        cy.get('[aria-label="Please enter OTP character 6"]').type("6");
        cy.xpath("(//button[contains(@class,'MuiButtonBase-root')])[16]").click();
        //****Enter country****
        cy.xpath("(//div[contains(@class,'MuiInput-root')])[2]").type('India + {downarrow}');
        cy.wait(1000);  
        cy.get('[data-cy="signup-phone-input"]').type("7397707936 {enter}");
        
  
  
      });
    })
  })