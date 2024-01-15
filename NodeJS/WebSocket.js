const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received message:', message);

    // Broadcast message to all connected clients (except sender)
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(message);
      }
    });
  });
});

// index.html
