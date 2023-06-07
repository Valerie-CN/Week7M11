const express = require("express") 

const app = express()

// app.use("/", express.static("AnotherRoute"))
// app.use("/books", express.static("books"))

app.use(express.json())

app.get("/books",(request, response) => {
    //  console.log (request)
    //  response.send("Helloo from the book route")

    const book = {
        title: "Lord of the Rings",
        author: "Tolkein",
        genre: "fantasy"
    }
 
    const successResponse = {
        message: "Response sent sucessfully",
        book: book
    }

    response.send(successResponse)

 })

 app.get("/",(request, response) => {
    console.log (response)
    response.send("Helloo from the Anotherroute")                 
})

app.post ("/books", (request, response) => {
    // console.log(request.body)
    // response.send("Helloo from the post route") 

    const newBook = {
        id: Math.floor(Math.random() * 50),
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre
    }

    const successResponse = {
        message: "New book successfully added to DB",
        newBook: newBook
    }

    response.send(successResponse)
})

app.listen(5001, () => console.log("Server is listening"))