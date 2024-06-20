describe('template spec', () => {
    //Skall utförs före varje test
    beforeEach(() =>{
        cy.visit("index.html")
    })

     it('Kontrollera titel på index sida', () => {
      //H1 taggen
      cy.get("h1").should("contains.text", "Startsida")
     })


     it('Kontrollera titel på About sida (för en inloggad user)', () => {
        //besöka About sidan
        cy.visit("About.html")
        //Kontrollera h1 tag på sidan 
        cy.get("h1").should("contains.text", "About")

     })





  })