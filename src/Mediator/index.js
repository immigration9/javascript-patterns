import Mediator from './Mediator';
import Player from './Player';

let player1 = new Player("immigration9");
let player2 = new Player("helloworld");
let player3 = new Player("homer");

Mediator.subscribe(player1);
Mediator.subscribe(player2);
Mediator.subscribe(player3);
window.onkeypress = Mediator.keypress;

setTimeout(() => {
  window.onkeypress = null;
  alert('Game finished');
}, 30000)
