const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const PORT = 5000;

// Static Files
// This allows the server to access and serve any files located in the "public" directory to users accessing the web application.
app.use(express.static(__dirname + '/public'));

// Home Page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Everytime a user connects to the server, the server will log a message to the console.
io.on('connection', (socket) => {
    console.log('User connected');
    // Listen to chat message
    socket.on("chat message", (msg) => {
        io.emit("chat message", msg)
    })
    // Listen to when a User disconnects
    socket.on("disconnect", () => {
        console.log("User disconnected");
    });
});

// Listen on port 5000
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});

