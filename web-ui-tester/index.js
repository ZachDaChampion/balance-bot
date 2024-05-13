import proto, {
  PhysicalParams,
  PitchControllerParams,
  Response,
  YawControllerParams,
} from "./proto/proto.js";
import WebSocket, { WebSocketServer } from "ws";
import readline from "readline";

let id = 0;

// Create WebSocket server
const wss = new WebSocketServer({ port: 81 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    // Parse the message using protobuf
    let msg = proto.Web2Bot.decode(message);
    console.log(`Received message: ${JSON.stringify(msg)}`);

    // Send a simple response back
    let bot2web = {
      id,
      response: { code: Response.Code.OK, commandId: msg.id, message: null },
      state: null,
      PhysicalParams: null,
      PitchControllerParams: null,
      YawControllerParams: null,
      log: null,
    };
    let buffer = proto.Bot2Web.encode(bot2web).finish();
    ws.send(buffer);
  });

  console.log("New connection established");
});

// Create a simple CLI
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  // Split the input into level and message
  let [level, ...messageParts] = input.split(" ");
  let message = messageParts.join(" ");

  switch (level.toLowerCase()) {
    case "debug":
      level = proto.LogLevel.DEBUG;
      break;
    case "info":
      level = proto.LogLevel.INFO;
      break;
    case "warn":
      level = proto.LogLevel.WARN;
      break;
    case "error":
      level = proto.LogLevel.ERROR;
      break;
    case "fatal":
      level = proto.LogLevel.FATAL;
      break;
    default:
      level = proto.LogLevel.INFO;
      message = input;
      break;
  }

  let bot2web = {
    id,
    response: null,
    state: null,
    PhysicalParams: null,
    PitchControllerParams: null,
    YawControllerParams: null,
    log: { level, message },
  };

  // Encode the log object using protobuf
  let buffer = proto.Bot2Web.encode(bot2web).finish();

  // Broadcast the log to all connected clients
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(buffer);
    }
  });
});

console.log("WebSocket server is running on ws://localhost:81");
