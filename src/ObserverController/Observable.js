class Observable {
  subscribe = (fn, type) => {
    let subType = type || 'verbose';
    if (typeof this.subscribers[subType] === 'undefined') {
      this.subscribers[subType] = [];
    }
    this.subscribers[subType].push(fn);
  }
  unsubscribe = (fn, type) => {
    this.visitSubscribers('unsubscribe', fn, type);
  }
  notify = (name, type) => {
    this.visitSubscribers('notify', name, type);
  }
  visitSubscribers = (action, arg, type) => {
    let subType = type || 'verbose';
    let subscribers = this.subscribers[subType];
    let max = subscribers.length;

    for (let i = 0; i < max; i++) {
      switch(action) {
        case 'notify':
          subscribers[i](arg);
          break;
        case 'unsubscribe':
        default:
          if (subscribers[i] === arg) {
            subscribers.splice(i, 1);
          }
          break;
      }
    }
  }
}

export default Observable;