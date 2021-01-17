const Server = require('./src/server/app');
require('dotenv').config();

const server = new Server();

server.execute(port => {
  console.log(`Listening port ${ port }`);
});
