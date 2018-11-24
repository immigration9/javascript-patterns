import mediator from './Mediator';
class Player {
  constructor(name) {
    this.points = 0;
    this.name = name;
  }
  play = () => {
    this.points += 1;
    mediator.played();
  }
}
export default Player;