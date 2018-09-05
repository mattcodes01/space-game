import Entity from '../Entity';
import EntityProperties from '../../interfaces/EntityProperties';

export default class Ship extends Entity {
  private color: '#fff';

  constructor(props: EntityProperties) {
    super(props);
  }

  draw(renderingContext: CanvasRenderingContext2D): void {
    const { x, y } = this.pos;
    const { width, height } = this.size;

    renderingContext.strokeStyle = 'white';
    renderingContext.beginPath();
    renderingContext.moveTo(x, y);
    renderingContext.lineTo(x + width, y);
    renderingContext.lineTo(x + width / 2, y - height);
    renderingContext.lineTo(x, y);
    renderingContext.stroke();
  }
}
