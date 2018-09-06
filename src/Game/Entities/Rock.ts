import Entity from '../Entity';
import EntityProperties from '../../interfaces/EntityProperties';

export default class Rock extends Entity {
  constructor(props: EntityProperties) {
    super(props);
  }

  draw(renderingContext: CanvasRenderingContext2D) {
    const { x, y } = this.pos;
    const { height, width } = this.size;
    renderingContext.fillStyle = '#00ff00';
    renderingContext.fillRect(x, y, width, height);
  }
}
