import Dimension from './Dimension';
import Point from './Point';

export default interface EntityProperties {
  pos: Point;
  size: Dimension;
  angle: number;
  vel: number;
}
