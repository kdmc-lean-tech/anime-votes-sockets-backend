const { v4: uuidv4 } = require('uuid');

class Anime {
  constructor(name) {
    this.name = name;
    this.id = uuidv4();
    this.votes = 0;
  }
}

module.exports = Anime;
