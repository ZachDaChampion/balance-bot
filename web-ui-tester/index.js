import { WebSocketServer } from "ws";
import { Message } from "./proto/proto.js"

let id = 0;

// Create WebSocket server
const wss = new WebSocketServer({ port: 81 });

wss.on("connection", (ws) => {
  console.log("New connection established");
  ws.on("message", (message) => {
    let msg = Message.decode(message);
    console.log(`Received message: ${JSON.stringify(msg, null, 2)}`);
  });
});

console.log("WebSocket server is running on ws://localhost:81");
