import Entity from './Entity';
import Ship from './Entities/Ship';

export default class GameState {
  entities: Entity[];
  init() {
    this.entities = [];
    const ship = new Ship({
      pos: {
        x: 100,
        y: 100
      },
      size: {
        height: 50,
        width: 50
      }
    });

    this.entities.push(ship);
  }
}
