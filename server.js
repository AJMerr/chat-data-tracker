import express from "express"
import chatRouter from "./controller/chat_data.js"

const app = express()

// Middleware registration
// Parses through the body of the HTTP requests from a URL encoded string 
app.use(express.urlencoded({extended: true}))

// Parses through the body of the HTTP requests from a JSON string  
app.use(express.json())

app.use("/", chatRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`)
})