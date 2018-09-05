import Game from './Game/Game';
import GameState from './Game/GameState';

console.log('it works');

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const renderingContext = canvas.getContext('2d');

const state = new GameState();
state.init();

const game = new Game(state, renderingContext);
game.start();
