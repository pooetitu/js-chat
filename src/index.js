var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http);

app.get("/", (request, response) => {
  response.sendFile(__dirname + "\\app\\index.html");
});

let rooms = new Map();

io.on("connection", (socket) => {
  console.log("User connected");
  socket.emit("rooms list", rooms.keys);
  socket.on("message", (data) => {
    console.log(data);
    socket.broadcast.emit("message", data);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  })
});

http.listen(3000, () => {
  console.log("Listening on port 3000");
});
