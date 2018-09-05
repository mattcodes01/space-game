import Point from '../interfaces/Point';
import Drawable from '../interfaces/Drawable';
import Dimension from '../interfaces/Dimension';
import EntityProperties from '../interfaces/EntityProperties';

export default class Entity implements Drawable {
  private _pos: Point;
  private _size: Dimension;

  constructor(props: EntityProperties) {
    this._pos = props.pos;
    this._size = props.size;
  }

  draw(renderingContext: CanvasRenderingContext2D): void {}
  move() {}

  get pos() {
    return this._pos;
  }
  set pos(newPosition: Point) {
    this._pos = newPosition;
  }
  get size() {
    return this._size;
  }
  set size(newSize: Dimension) {
    this._size = newSize;
  }
}
