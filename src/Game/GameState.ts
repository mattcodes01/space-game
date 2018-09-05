import Entity from './Entity';
import Ship from './Entities/Ship';

export default class GameState {
  entities: Entity[];
  init() {
    this.entities = [];
    const ship = new Ship({
      pos: {
        x: 1000,
        y: 500
      },
      size: {
        height: 50,
        width: 50
      },
      angle: (7 * Math.PI) / 4,
      vel: 1
    });

    this.entities.push(ship);
  }
}
