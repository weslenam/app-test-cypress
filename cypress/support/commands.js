import conf from "./conf.js";

Cypress.Commands.add("_get_by", (el) => {
  cy.get(conf().selector(el));
});

Cypress.Commands.add("_visit", (path = null) => {
  cy.visit(`${conf().base_url}${path !== null ? path : ""}`);
});

Cypress.Commands.add("q_select", (el, value) => {
  cy._get_by(el).click();
  cy.contains(value).click();
});

Cypress.Commands.add("q_input", (el, value) => {
  cy._get_by(el).type(value, { delay: 1 });
});

Cypress.Commands.add("q_radio", (el = null, check = true) => {
  if (check) {
    cy._get_by(el).click();
  } else {
    cy._get_by(el);
  }
});

Cypress.Commands.add("q_checkbox", (el, check = true) => {
  if (check) {
    cy._get_by(el).click();
  } else {
    cy._get_by(el);
  }
});

Cypress.Commands.add("q_checkbox_is", (el, checked = true) => {
  cy._get_by(el).should("have.attr", "aria-checked", `${checked.toString()}`);
});

Cypress.Commands.add("q_radio_is", (el = null, checked = false) => {
  if (el !== null) {
    cy.q_radio(el).should("have.attr", "aria-checked", `${checked.toString()}`);
  } else {
    cy.should("have.attr", "aria-checked", `${checked.toString()}`);
  }
});

Cypress.Commands.add("q_btn", (el, click = false) => {
  if (click) {
    cy._get_by(el).click();
  } else {
    cy._get_by(el);
  }
});

Cypress.Commands.add("q_notify", (el) => {
  cy._get_by(el);
});
