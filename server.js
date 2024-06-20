//Deklararion
const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const app = new express()
const portNr = 8080
const filePath = "./data.json"

//App ska använda Body-Parser för hantering av Payload
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Starta servern
app.listen(portNr, () => {
   console.log(`Server är nu på ${portNr} och lyssnar!`)
})


//endpoint 1
app.get("", (req, res) => {
   //res.send("Hello World to everyone!")
res.sendFile("index.html", {root: __dirname})
})


//endpoint 2
app.post("", (req, res) => {
    //Hämta Payload data från request
    const data = req.body
    const jsonStr = JSON.stringify(data, null, 2)
    //Skriv till fil
    fs.writeFile(filePath, jsonStr, (err) => {
        if (err) console.log(err)
    })

})


//endpoint 3
app.post('/reg', (req, res) => {
    //Hämta Payload data från request
    const data1 = req.body
    const jsonStr1 = JSON.stringify(data1, null, 2)
    //Skriv till fil
    fs.writeFile(filePath, jsonStr1, (err) => {
        if (err) console.log(err)
    })

})

 



//node .\server.js
//nodemon .\server.js
