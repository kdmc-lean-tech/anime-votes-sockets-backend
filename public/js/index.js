const socket = io('http://localhost:8080');

socket.on('anime-list', info => {
  console.log(info);
});
