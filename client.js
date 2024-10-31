const readline = require('readline');
const io = require('socket.io-client');

// Connect to the server
const socket = io('http://localhost:3000');

// Set up readline interface for terminal input/output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a username
rl.question("Enter your username: ", (username) => {
    console.log(`Welcome to the chat, ${username}!`);
    console.log('Type your messages below:\n');

    // Emit the 'join' event with the username
    socket.emit('join', username);

    // Send a message to the server
    rl.on('line', (input) => {
        socket.emit('message', input);
    });

    // Display incoming messages
    socket.on('message', (message) => {
        console.log(message);
    });
});

// Handle server disconnect
socket.on('disconnect', () => {
    console.log('Disconnected from server');
    rl.close();
});
