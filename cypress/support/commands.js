import { registrationPage } from './pom';
import { generateName, generateSurname, generateEmail, generatePhoneNumber } from "../fixtures/functions";

Cypress.Commands.add("registerUser", () => {
  cy.get(registrationPage.firstname).type(generateName());
  cy.get(registrationPage.lastname).type(generateSurname());
  cy.get(registrationPage.email).type(generateEmail());
  cy.get(registrationPage.telephone).type(generatePhoneNumber());
  cy.get(registrationPage.password).type("testing123");
  cy.get(registrationPage.confirmPassword).type("testing123");
  cy.get(registrationPage.subNo).click();
  cy.get(registrationPage.termsCheckbox).click();
  cy.get(registrationPage.continueButton).click();
});