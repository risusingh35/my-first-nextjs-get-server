const app = require('./app');
const http = require('http');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 4001;

// Create an HTTP server
const server = http.createServer(app);

// Setup Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Handle Socket.io connections
io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Attach io instance to app
app.set('io', io);

// Emit message every 5 seconds and close after 1 minute
let interval;
io.on("connection", (socket) => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => emitMessage(socket), 3000);
  setTimeout(() => {
    clearInterval(interval);
    interval = null;
  }, 4000); // 1 minute
});

function emitMessage(socket) {
  const msg = 'Welcome to IT World of RISU SINGH';
  socket.emit("testEmitter", { msg });
}

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
