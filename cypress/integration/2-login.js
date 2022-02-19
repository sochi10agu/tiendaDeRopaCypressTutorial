describe("Login", ()=>{
    beforeEach(()=>{
        cy.visit("/");
    })
    it("Login with incorrect email", ()=>{
        cy.login("Ramon", "Diaz");
        cy.fixture("login").then((login)=>{
            cy.get(login.incorrectLoginBanner).should("contain", "Invalid email address");
        })        
    })
})