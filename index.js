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
  
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});