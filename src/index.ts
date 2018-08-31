console.log('it works');

const backgroundCanvas = document.getElementById(
  'background-canvas'
) as HTMLCanvasElement;
const backgroundContext = backgroundCanvas.getContext('2d');

const gameCanvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const gameContext = gameCanvas.getContext('2d');

// draw background
backgroundContext.fillStyle = '#000';
backgroundContext.fillRect(
  0,
  0,
  backgroundCanvas.height,
  backgroundCanvas.width
);

// draw box
gameContext.fillStyle = '#00ff00';
gameContext.fillRect(200, 200, 100, 100);
