import Entity from '../Entity';
import EntityProperties from '../../interfaces/EntityProperties';
import { degToRad } from '../../util/Math';

export default class Ship extends Entity {
  constructor(props: EntityProperties) {
    super(props);
  }

  move() {
    this.pos.x += this.vel * Math.cos(this.angle);
    this.pos.y -= this.vel * Math.sin(this.angle);
  }

  rotateCounterClockwise() {
    this.angle += degToRad(5);
  }

  rotateClockwise() {
    this.angle -= degToRad(5);
  }

  draw(renderingContext: CanvasRenderingContext2D): void {
    const { x, y } = this.pos;
    const { width, height } = this.size;

    // rotate takes positive numbers to rotate clockwise
    // so must negate the angle
    renderingContext.translate(x + width / 2, y + height / 2);
    renderingContext.rotate(-this.angle);
    renderingContext.strokeStyle = this.color;
    renderingContext.lineWidth = 3;
    renderingContext.beginPath();
    renderingContext.moveTo(-(width / 2), -(height / 2));
    renderingContext.lineTo(width / 2, 0);
    renderingContext.lineTo(-(width / 2), height / 2);
    renderingContext.lineTo(-(width / 2), -(height / 2));
    renderingContext.stroke();
    renderingContext.setTransform(1, 0, 0, 1, 0, 0);
  }
}
