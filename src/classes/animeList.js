const Anime = require("./anime");

class AnimeList {
  constructor() {
    this.animes = [
      new Anime('Date a Live'),
      new Anime('Inuyasha'),
      new Anime('Naruto'),
      new Anime('Code Geass')
    ];
  }

  getAnimes() {
    return this.animes;
  }

  addAnime(name) {
    const newAnime = new Anime(name);
    this.animes.push(newAnime);   
  }

  deleteAnime(animeId) {
    this.animes = this.animes.filter(anime => anime.id !== animeId);
  }

  changeNameAnime(id, name) {
    this.animes.forEach(anime => {
      if (anime.id === id) {
        anime.name = name;
      }
      return anime;
    });
  }

  increaseVotes(animeId) {
    this.animes.forEach(anime => {
      if (anime.id === animeId) {
        anime.votes += 1;
      }
      return anime;
    });
  }  
}

module.exports = AnimeList;
