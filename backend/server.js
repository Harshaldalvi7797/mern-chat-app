const express = require("express")
const connectDB = require("./config/db");
var { chats } = require("./data/data")
const dotenv = require("dotenv")

const app = express();
dotenv.config()
connectDB();

app.get('/', (req, res) => {
    return res.send("API is running")
})

app.get("/api/chat", (req, res) => {
    // console.log("hi", chats)
    return res.send({ data: chats, message: "hi" })
})

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})
app.listen(process.env.PORT || 5000,   console.log(`Server running on PORT ${process.env.PORT}...`.yellow.bold)
)