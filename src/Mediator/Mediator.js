import scoreboard from './Scoreboard';
class Mediator {
  static instance;

  constructor() {
    if (instance) {
      return instance;
    }
    
    this.instance = this;
    this.players = [];

  }
  subscribe = (player) => {
    this.players.push(player);
  }
  played = () => {
    let players = this.players;
    let score = {};
    players.map((pl) => {
      score[pl.name] = pl.points;
    })
    scoreboard.update(score);
  }
  keypress = (e) => {
    e = e || window.event;
    const base = 49;
    let key = e.which - base; // 49 === Number(1);

    if (key < this.players.length) {
      let player = this.players[key];
      player.play();
    } else {
      alert("Key is not assigned");
    }
  }
}
export default Mediator;