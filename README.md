Command-Line Chat Application
A simple command-line chat application built with Node.js and Socket.io that enables real-time messaging between users. Each user connects to the server, chooses a username, and joins a shared chat room.

Features
Real-time messaging with multiple users
Display of usernames upon joining, messaging, and disconnecting
Minimalistic command-line interface for easy setup and usage
Prerequisites
Node.js installed (version 14 or higher recommended)
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/Omidcr77/chat-app.git
cd chat-app
2. Install Dependencies
Run the following command to install necessary packages:

bash
Copy code
npm install
3. Start the Server
Start the chat server using:

bash
Copy code
node server.js
The server will start on http://localhost:3000.

4. Start the Client(s)
In separate terminal windows, start the client for each user:

bash
Copy code
node client.js
Each client will prompt for a username upon launching, which will be displayed in the server logs and to other users in the chat.

How It Works
Server (server.js): The server listens for clients connecting, handles messaging events, and broadcasts messages to all connected clients.
Client (client.js): The client connects to the server, prompts the user to enter a username, and then sends and receives messages in real-time.
Example Workflow
Run node server.js to start the server.
Open multiple terminal windows and run node client.js in each to start separate clients.
Each client will prompt for a username. Enter a unique username for each client.
Type messages in any client terminal, and the message will be broadcast to all other connected clients.
Project Structure
plaintext
Copy code
.
├── server.js        # Server-side code to manage connections and broadcast messages
├── client.js        # Client-side code to send/receive messages and manage the CLI
├── package.json     # Dependencies and project metadata
└── README.md        # Project documentation
Dependencies
socket.io - For real-time WebSocket communication between server and clients
socket.io-client - Client library to connect to the server
readline - Node.js built-in module for handling input/output in the terminal