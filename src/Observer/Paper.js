import Publisher from './Publisher';

/**
 * `Paper` is a singleton class which exists throughout the application.
 * When either `daily` or `monthly` function is invoked, it notifies the `Publisher`.
 * by invoking the publish function, `Publisher` notifies the observers within the scope.
 */
class Paper extends Publisher {
  constructor() {
    super();
  }
  /**
   * Because the type in `daily` function was not defined,
   * The default would be `any`, which means the users registered to the default category,
   * they will be notified.
   */
  daily = () => {
    this.publish("[Washington Post]");
  }
  weekly = () => {
    this.publish("[Hustler]", "weekly");
  }
  monthly = () => {
    this.publish("[Horse & Hounds]", "monthly");
  }
}

let paper = new Paper();
export default paper;