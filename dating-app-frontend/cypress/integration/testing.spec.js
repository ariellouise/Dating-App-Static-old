it("should open my website and go to inbox", () => {
  cy.visit("http://localhost:5500");
  cy.get("#inboxInNav").click();
  cy.url().should("include", "/inbox.html");
});
