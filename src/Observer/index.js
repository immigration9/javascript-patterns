import paper from './Paper';
import Subscriber from './Subscriber'

let joe = new Subscriber('Joe');
let jane = new Subscriber('Jane');
let john = new Subscriber('John');

/**
 * Registers the both users' `readNews` method.
 */
paper.subscribe(joe.readNews);
paper.subscribe(jane.readNews, 'monthly');
paper.subscribe(john.readNews, 'weekly');

/**
 * Invoke functions within `paper` object.
 * Only registered Observers react to this situation.
 */
paper.daily();
paper.daily();
paper.daily();
paper.daily();
paper.weekly();
paper.monthly();