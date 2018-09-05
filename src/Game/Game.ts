import GameState from './GameState';
import Entity from './Entity';

export default class Game {
  constructor(
    private state: GameState,
    private renderingContext: CanvasRenderingContext2D
  ) {}

  update() {}

  render() {
    this.clearRenderingContext();
    this.state.entities.forEach((entity: Entity) => {
      entity.draw(this.renderingContext);
    });
  }

  clearRenderingContext() {
    this.renderingContext.clearRect(0, 0, 1920, 1080);
  }

  step(timestamp: number) {
    this.render();
    window.requestAnimationFrame(this.step.bind(this));
  }

  start() {
    window.requestAnimationFrame(this.step.bind(this));
  }
}
