import Observable from "./Observable";
import Node from "./Node";

class Controller {
  constructor() {
    this.observable = undefined;
    this.subscribers = {
      verbose: [],
      warning: [],
      error: [],
    };
  }

  registerObserver = (obs) => {
    if (obs instanceof Observable) {
      this.observable = obs;
    } else {
      throw new Error("You must pass a valid observable object");
    }
  }

  registerNode = (node) => {
    if (node instanceof Node) {
      
    }
  }

  notify = (data) => {
    if (this.observable) {
      this.observable.notify()
    }
  }
}

export default Controller;