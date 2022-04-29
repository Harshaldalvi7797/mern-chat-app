const express = require("express")
const connectDB = require("./config/db");
var { chats } = require("./data/data")
const dotenv = require("dotenv")
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const app = express();
dotenv.config()
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
connectDB();
app.use(express.json()); // to accept json data
app.get('/', (req, res) => {
    return res.send("API is running")
})

// app.get("/api/chat", (req, res) => {
//     // console.log("hi", chats)
//     return res.send({ data: chats, message: "hi" })
// })

app.get("/api/chat/:id", (req, res) => {
    // console.log(req.params.id)
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat)
})
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);
const server = app.listen(process.env.PORT || 5000, console.log(`Server running on PORT ${process.env.PORT}...`.yellow.bold)
)

const io = require("socket.io")(server, {
    pingTimeout: 60000,
    cors: {
        origin: "http://localhost:3000",
        // credentials: true,
    },
});
io.on("connection", (socket) => {
    console.log("Connected to socket.io");
    socket.on("setup", (userData) => {
        socket.join(userData._id);
        // console.log(userData._id)
        socket.emit("connected");
    });
    socket.on("join chat", (room) => {
        socket.join(room);
        console.log("User Joined Room: " + room);
    });

    
});