// server.js
const { Server } = require("socket.io");

const io = new Server(3000, {
  cors: {
    origin: "http://localhost:8000", // allow your frontend
  },
});

io.on("connection", (socket) => {
  console.log("New client:", socket.id);
  io.emit("message", `${socket.id} has entered the chat`);

  socket.on("send-message",(message) => {
    console.log(message);
    socket.broadcast.emit("recieve-message",message)
  })
});
