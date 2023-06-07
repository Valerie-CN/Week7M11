const express = require("express") 

const app = express()

app.use("/", express.static("AnotherRoute"))
app.use("/books", express.static("books"))

app.listen(5001, () => console.log("Server is listening"))