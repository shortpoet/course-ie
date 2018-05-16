const express = require("express");
const http = require("http");

const port = 4001;
const app = express();

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));

// Setup Sockets
require("./sockets")(server);
