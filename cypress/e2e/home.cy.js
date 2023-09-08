describe("form login", () => {
  const dataset = {
    usuario: {
      field: "login.usuario",
      value: "weslenam@gmail.com",
    },
    tipo: {
      field: "login.tipo",
      value: "novato",
    },
    admin: {
      field: "login.admin",
    },
    ativar: {
      field: "login.ativar",
    },
  };
  const features = {
    salvar: "login.salvar",
    limpar: "login.limpar",
  };

  const alerts = {
    error: "login.error",
    success: "login.success",
  };

  beforeEach(() => {
    cy._visit();
  });

  it("consigo preencher o formulario", () => {
    cy.q_input(dataset.usuario.field, dataset.usuario.value).should(
      "have.value",
      dataset.usuario.value
    );

    cy.q_select(dataset.tipo.field, dataset.tipo.value);
    cy.q_radio(dataset.admin.field).q_radio_is(dataset.admin.field, true);

    cy.q_checkbox(dataset.ativar.field).q_checkbox_is(
      dataset.ativar.field,
      true
    );

    cy.q_btn(features.salvar).click();

    cy.wait(200);
    cy.q_notify(alerts.success).should("be.visible");
  });

  it("não posso salvar o formulario sem os dados obrigatórios", () => {
    cy.q_btn(features.salvar).click();

    cy.wait(200);
    cy.q_notify(alerts.error).should("be.visible");
  });
});
