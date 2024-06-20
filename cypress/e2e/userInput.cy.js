describe('template spec', () => {
  beforeEach(() => {
    cy.visit("index.html")
  })

    //Vi simulerar inloggningsprocess
    it('Logga in. Matar: User=Olga, lösenord=Rjn', () => {
    const username = "Olga"
    const password = "Rjn"
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    //Klicka på knappen för att logga in
    cy.get("#btnSubmit").click()
   })


   it('Logga in. Matar: User=Leo, lösenord=qwerty', () => {
    const username = "Leo"
    const password = "qwerty"
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    //Klicka på knappen för att logga in
    cy.get("#btnSubmit").click()
   })


   it('Logga in. Matar: User=" ", lösenord=Rjn', () => {
    const username = " "
    const password = "Rjn"
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    //Klicka på knappen för att logga in
    cy.get("#btnSubmit").click()
   })
   

   it('Logga in. Matar: User="Olga", lösenord=" "', () => {
    const username = "Olga"
    const password = " "
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    //Klicka på knappen för att logga in
    cy.get("#btnSubmit").click()
   })


   it('Logga in. Matar: User=" ", lösenord=" "', () => {
    const username = " "
    const password = " "
    cy.get("#username").type(username)
    cy.get("#password").type(password)
    //Klicka på knappen för att logga in
    cy.get("#btnSubmit").click()
   })

  function userInput (username , password) {
  }



//Vi simulerar registrering
it('Skapa ett konto. Matar: User=Olga, lösenord=Rjn', () => {
  const username1 = "Olga"
  const password1 = "Rjn"
  cy.get("#username1").type(username1)
  cy.get("#password1").type(password1)
  //Klicka på knappen för att logga in
  cy.get("#btnSubmit1").click()
 })


 it('Skapa ett konto. Matar: User=Leo, lösenord=qwerty', () => {
  const username1 = "Leo"
  const password1 = "qwerty"
  cy.get("#username1").type(username1)
  cy.get("#password1").type(password1)
  //Klicka på knappen för att logga in
  cy.get("#btnSubmit1").click()
 })


 it('Skapa ett konto. Matar: User=" ", lösenord=Rjn', () => {
  const username1 = " "
  const password1 = "Rjn"
  cy.get("#username1").type(username1)
  cy.get("#password1").type(password1)
  // Klicka på knappen för att logga in
  cy.get("#btnSubmit1").click()
 })
 

 it('Skapa ett konto. Matar: User="Olga", lösenord=" "', () => {
  const username1 = "Olga"
  const password1 = " "
  cy.get("#username1").type(username1)
  cy.get("#password1").type(password1)
  // Klicka på knappen för att logga in
  cy.get("#btnSubmit1").click()
 })


 it('Logga in. Matar: User=" ", lösenord=" "', () => {
  const username1 = " "
  const password1 = " "
  cy.get("#username1").type(username1)
  cy.get("#password1").type(password1)
  //Klicka på knappen för att logga in
  cy.get("#btnSubmit1").click()
 })

 function userInput (username1 , password1) {

}
 
})

//


