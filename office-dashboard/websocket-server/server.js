const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

let oathCount = 0;

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    if (message === 'OATH_TAKEN') {
      oathCount++;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'OATH_TAKEN', count: oathCount }));
        }
      });
    }
  });
});

console.log('WebSocket server is running on ws://localhost:8080');
