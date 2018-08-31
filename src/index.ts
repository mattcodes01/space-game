console.log('it works');

import KeyboardController from './controllers/KeyboardController';
import MouseController from './controllers/MouseController';

const ccw = () => {
  console.log('move ship counterclockwise');
};

const cw = () => {
  console.log('move ship clockwise');
};

const ac = () => {
  console.log('accelerate');
};

const dc = () => {
  console.log('decelerate');
};

const fg = () => {
  console.log('fire gun');
};

const keyboardController: GameController = new KeyboardController({
  accelerate: 'w',
  decelerate: 's',
  rotateShipClockWise: 'd',
  rotateShipCounterClockwise: 'a'
});

const mouseController: GameController = new MouseController({
  fireGun: 1
});

keyboardController.listen({
  accelerate: ac,
  decelerate: dc,
  rotateShipCounterClockwise: ccw,
  rotateShipClockwise: cw,
  fireGun: fg
});

mouseController.listen({
  fireGun: fg
});
