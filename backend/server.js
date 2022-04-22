const express = require("express")
const connectDB = require("./config/db");
var { chats } = require("./data/data")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config()
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
connectDB();
app.use(express.json()); // to accept json data
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
app.use("/api/user", userRoutes);
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT || 5000,   console.log(`Server running on PORT ${process.env.PORT}...`.yellow.bold)
)