class Publisher {
  subscribers = { any: [] }

  /**
   * `subscribe` method takes function & type to register.
   * `unsubscribe` method takes functon & type to deregister
   */
  subscribe = (fn, type) => {
    type = type || 'any';
    /**
     * Initialization of subscriber field.
     */
    if (typeof this.subscribers[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  }
  unsubscribe = (fn, type) => {
    this.visitSubscribers('unsubscribe', fn, type);
  }
  /**
   * `publish` method invokes the `visitSubscribers` method.
   * `visitSubscriber` method determines the action, and if it is set to 'publish', the trigger the functions registered as observers.
   */
  publish = (publication, type) => {
    this.visitSubscribers('publish', publication, type);
  }
  visitSubscribers = (action, arg, type) => {
    let pubType = type || 'any';
    let subscribers = this.subscribers[pubType];
    let max = subscribers.length;

    for (let i = 0; i < max; i++ ) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  }
}

export default Publisher;