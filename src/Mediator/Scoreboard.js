class Scoreboard {
  static instance;
  constructor() {
    if (instance) {
      return instance;
    }
    this.instance = this;
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

export default Scoreboard;