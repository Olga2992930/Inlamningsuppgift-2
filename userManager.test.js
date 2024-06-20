const axios = require('axios')
const User = require("./user")
const UserManager = require("./userManager")
const UserDB = require("./userDB")
jest.mock('axios')

describe("UserManager", () => {

    let mockData;
    let userManager;

    beforeEach( () => {
        
        mockData = new User("Olga", "Rjn", 1);

        //Vi skapar en UserDB
        let userDB = new UserDB(axios)

        //Skapa en UserManager
        userManager = new UserManager(userDB)
    })

    // Test 1
    it("Logga in som User", async () => {
       
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.login(1, 'Olga', 'Rjn');

        console.log(result);

        expect(result).toBe(true);
        expect(userManager.currentUser.username).toBe('Olga')
    })


     // Test 2
    it("Om lösenordet är felaktigt", async () => {
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.login('Olga', 'Rjn')

        expect(result).toBeFalsy()
        expect(userManager.currentUser).toBeUndefined()
    })


    // Test 3
    it("User ät ny", async () => {
        axios.get.mockResolvedValue({data: new User(null, null, null)});
        
        axios.post.mockResolvedValue({data: "Ny User sparad successfully"});

        let result = await userManager.saveNewUser(mockData)

        expect(result).toBe("Ny User sparad successfully")
    })


    // Test 4
    it("User är inte ny", async () => {
        axios.get.mockResolvedValue({data: mockData});

        let result = await userManager.saveNewUser(mockData)

        expect(result).toBe("User finns redan")
    })


    // Test 5
    it("Spara något som inte är en User", async () => {
        let result = await userManager.saveNewUser(null)

        expect(result).toBe("Ingen User")
    })
})