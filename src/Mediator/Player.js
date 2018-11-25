import Mediator from './Mediator';
class Player {
  constructor(name) {
    this.points = 0;
    this.name = name;
  }
  play = () => {
    this.points += 1;
    Mediator.played();
  }
}
export default Player;