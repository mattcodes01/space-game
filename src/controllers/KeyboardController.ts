class KeyboardController implements GameController {
  private eventCallbacks: GameInputEvents;
  private settings: KeyboardControllerSettings;

  constructor(settings: KeyboardControllerSettings) {
    this.settings = settings;
  }

  private emit(key: string): void {
    const settings = this.settings;
    switch (key) {
      case settings.accelerate:
        this.eventCallbacks.accelerate();
        break;
      case settings.decelerate:
        this.eventCallbacks.decelerate();
        break;
      case settings.rotateShipClockwise:
        this.eventCallbacks.rotateShipClockwise();
        break;
      case settings.rotateShipCounterClockwise:
        this.eventCallbacks.rotateShipCounterClockwise();
        break;
      default:
        console.log('invalid key');
    }
  }
  listen(eventCallbacks: GameInputEvents): void {
    this.eventCallbacks = eventCallbacks;
    window.addEventListener('keypress', event => {
      this.emit(event.key);
    });
  }
}

export default KeyboardController;
