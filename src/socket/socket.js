const AnimeList = require('../classes/animeList');

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
    this.animeList = new AnimeList();
  }

  socketEvents() {
    this.io.on('connection', socket => {

      socket.emit('anime-list', { animes: this.animeList.getAnimes() });
      
      socket.on('increase-vote', id => {
        this.animeList.increaseVotes(id);
        this.io.emit('anime-list', { animes: this.animeList.getAnimes() });
      });

      socket.on('delete-anime', id => {
        this.animeList.deleteAnime(id);
        this.io.emit('anime-list', { animes: this.animeList.getAnimes() });
      });

      socket.on('change-name', ({ id, name }) => {
        this.animeList.changeNameAnime(id, name);
        this.io.emit('anime-list', { animes: this.animeList.getAnimes() });
      });

      socket.on('add-anime', name => {
        this.animeList.addAnime(name);
        this.io.emit('anime-list', { animes: this.animeList.getAnimes() });
      });
    });
  }
}

module.exports = Sockets;
