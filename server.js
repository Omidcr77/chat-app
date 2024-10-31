const http = require('http');
const socketIo = require('socket.io');

// Create an HTTP server
const server = http.createServer();
const io = socketIo(server);

io.on('connection', (socket) => {
    // Listen for 'join' event to get the username
    socket.on('join', (username) => {
        console.log(`${username} connected`);
        
        // Broadcast the message to all other users
        socket.on('message', (message) => {
            io.emit('message', `${username}: ${message}`);
        });

        // Handle user disconnect
        socket.on('disconnect', () => {
            console.log(`${username} disconnected`);
        });
    });
});

// Server listens on port 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
