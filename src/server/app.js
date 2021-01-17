const socketio = require('socket.io');
const express = require('express');
const cors = require('cors');
const http = require('http');
const Sockets = require('../socket/socket');
const path = require('path');

class Server {
  constructor() {
    this.port = process.env.PORT;
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = socketio(this.server, { /* config */ });
  }

  socketConfiguration() {
    new Sockets(this.io);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.static(path.resolve(__dirname, '../../public')));
  }

  execute(callback) {
    this.middlewares();
    this.socketConfiguration();
    this.server.listen(this.port, callback(this.port));
  }
}

module.exports = Server;
