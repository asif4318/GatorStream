const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Running!");
});

io.on("connection", (socket) => {
  /* Socket.Io events go here*/
  console.log("a user connected");
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
