import Entity from './Entity';
import Ship from './Entities/Ship';
import Rock from './Entities/Rock';
import { degToRad } from '../util/Math';

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
        height: 40,
        width: 50
      },
      angle: 0,
      vel: 2,
      color: '#fff'
    });
    const rock = new Rock({
      pos: {
        x: 1500,
        y: 500
      },
      size: {
        height: 50,
        width: 100
      },
      angle: 45,
      vel: 1
    });

    this.entities.push(ship);
    this.entities.push(rock);
  }
}
