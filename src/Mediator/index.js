import mediator from './Mediator';
import Player from './Player';

let player1 = new Player("immigration9");
let player2 = new Player("helloworld");
let player3 = new Player("homer");

mediator.subscribe(player1);
mediator.subscribe(player2);
mediator.subscribe(player3);
window.onkeypress = mediator.keypress;

setTimeout(() => {
  window.onkeypress = null;
  alert('Game finished');
}, 30000)
