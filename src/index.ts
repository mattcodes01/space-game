import Game from './Game/Game';
import GameState from './Game/GameState';
import KeyboardController from './controllers/KeyboardController';
import MouseController from './controllers/MouseController';

console.log('it works');

const keyboardController: GameController = new KeyboardController({
  accelerate: 'w',
  decelerate: 's',
  rotateShipClockWise: 'd',
  rotateShipCounterClockwise: 'a'
});

const mouseController: GameController = new MouseController({
  fireGun: 1
});

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const renderingContext = canvas.getContext('2d');

const state = new GameState();
state.init();

const game = new Game(state, renderingContext);
game.start();
