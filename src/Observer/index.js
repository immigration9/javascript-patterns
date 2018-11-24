import paper from './Paper';
import Subscriber from './Subscriber'

let joe = new Subscriber('joe');
let jane = new Subscriber('jane');

/**
 * Registers the both users' `readNews` method.
 */
paper.subscribe(joe.readNews);
paper.subscribe(jane.readNews, 'monthly');

/**
 * Invoke functions within `paper` object.
 * Only registered Observers react to this situation.
 */
paper.daily();
paper.daily();
paper.daily();
paper.daily();
paper.monthly();