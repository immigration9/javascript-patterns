class Scoreboard {
  constructor() {
    this.element = document.getElementById('results');
  }
  update = (score) => {
    let msg = '';
    for (let i in score) {
      if (score.hasOwnProperty(i)) {
        msg += '<p><strong>' + i + '</strong>: ';
        msg += score[i];
        msg += '</p>';
      }
    }
    this.element.innerHTML = msg;
  }
}
let scoreboard = new Scoreboard();
export default scoreboard;