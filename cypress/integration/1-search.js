describe("Search elements", () => {
    beforeEach(()=>{
        cy.visit("/");
    })
    it("search for elements with multiples results", ()=>{
        cy.search("dress");
        cy.fixture("searchResults").then((searchResult) => {
            cy.get(searchResult.title).should("contain", "dress");
        })
    })
    it("search for elements with no results", ()=> {
        cy.fixture("index").then((index)=>{
            cy.search("qwerty");
            cy.get(index.searchButton).click();
        })
        cy.fixture("searchResults").then((searchResult) => {
            cy.get(searchResult.alert).should("contain", "No results were found for your search");
        })
    })
    it("search for elements with special code", ()=>{
        cy.readFile("cypress/support/text/search.txt").then((textFile)=>{
            cy.search(textFile);
        })
        cy.fixture("searchResults").then((searchResult) => {
            cy.get(searchResult.alert).should("contain", "No results were found for your search");
        })
    })
})