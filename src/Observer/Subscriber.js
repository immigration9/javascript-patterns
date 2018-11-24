/**
 * `Subscriber` is a class which entails two things.
 * the name of the subscriber, and a method which later on will be registered to the Observable.
 * In this example, `readNews` function will be registered
 */
class Subscriber {
  constructor(name) {
    this.name = name;
  }
  readNews = (news) => {
    console.log(`${this.name}: I was reading ${news}`);
  }
}

export default Subscriber