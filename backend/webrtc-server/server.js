const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(cors());
const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
  transports: ["websocket", "polling"],
  allowEIO3: true,
});

const rooms = {};

io.on("connection", (socket) => {
  socket.on("join room", (roomID) => {
    if (rooms[roomID]) {
      rooms[roomID].push(socket.id);
    } else {
      rooms[roomID] = [socket.id];
    }
    const otherUser = rooms[roomID].find((id) => id !== socket.id);
    if (otherUser) {
      socket.emit("other user", otherUser);
      socket.to(otherUser).emit("user joined", socket.id);
    }
  });

  socket.on("offer", (payload) => {
    io.to(payload.target).emit("offer", payload);
  });

  socket.on("answer", (payload) => {
    io.to(payload.target).emit("answer", payload);
  });

  socket.on("ice-candidate", (incoming) => {
    io.to(incoming.target).emit("ice-candidate", incoming.candidate);
  });
});

app.get("/", (req, res) => {
  res.send("Running!");
});
