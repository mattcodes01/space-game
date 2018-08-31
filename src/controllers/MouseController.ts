class MouseController implements GameController {
  private eventCallbacks: GameInputEvents;
  private settings: MouseControllerSettings;
  private prevX: number;

  constructor(settings: MouseControllerSettings) {
    this.settings = settings;
  }

  private emit(button: number): void {
    const settings = this.settings;
    if (button === settings.fireGun) {
      this.eventCallbacks.fireGun();
    }
  }
  private emitMove(x: number): void {
    x < this.prevX
      ? this.eventCallbacks.rotateShipCounterClockwise()
      : this.eventCallbacks.rotateShipClockwise();
    this.prevX = x;
  }
  listen(eventCallbacks: GameInputEvents): void {
    this.eventCallbacks = eventCallbacks;
    window.addEventListener('click', event => {
      const button =
        typeof event.which !== 'undefined' ? event.which : event.button;
      this.emit(button);
    });
    window.addEventListener('mousemove', event => {
      this.emitMove(event.clientX);
    });
  }
}

export default MouseController;
