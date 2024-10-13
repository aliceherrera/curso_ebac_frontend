describe("Testes para a home", () => {
  beforeEach("Deve renderizar a página", () => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve renderizar 3 contatos", () => {
    cy.get(".contato").should("have.length", 3);
  });

  it("Deve adicionar 1 contato", () => {
    cy.get('[type="text"]').type("Alice Herrera");
    cy.get('[type="email"]').type("aliceherrera@gmail.com");
    cy.get('[type="tel"]').type("11123456789");
    cy.get('[type="submit"]').click();
  });

  it("Deve editar contato", () => {
    cy.wait(1000);
    cy.get(".contato").should("have.length", 4);
    cy.get(":nth-child(4) > .sc-gueYoa > .edit").click();
    cy.get('[type="text"]').clear().type("Paulo Henrique");
    cy.get('[type="email"]').clear().type("paulohenrique@gmail.com");
    cy.get('[type="tel"]').clear().type("11987654321");
    cy.get(".alterar").click();
  });

  it("Deve deletar contato", () => {
    cy.wait(1000);
    cy.get(".contato").should("have.length", 4);
    cy.get(":nth-child(5) > .sc-gueYoa > .delete").click();
    cy.wait(1000);
    cy.get(".contato").should("have.length", 3);
  });
});
