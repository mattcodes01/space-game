import Entity from './Entity';
import Ship from './Entities/Ship';
import Rock from './Entities/Rock';

export default class GameState {
  entities: Entity[];
  ship: Ship;

  constructor(
    private keyboardController: GameController,
    private mouseController: GameController
  ) {}

  init() {
    this.registerControllers();
    this.entities = [];
    this.ship = new Ship({
      pos: {
        x: 1000,
        y: 500
      },
      size: {
        height: 40,
        width: 50
      },
      angle: 0,
      vel: 0,
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

    this.entities.push(this.ship);
    this.entities.push(rock);
  }

  registerControllers() {
    this.keyboardController.listen();
    this.mouseController.listen({
      rotateShipClockwise: () => {
        this.ship.rotateClockwise();
      },
      rotateShipCounterClockwise: () => {
        this.ship.rotateCounterClockwise();
      },
      fireGun: () => {
        console.log('fg');
      }
    });
  }
}
