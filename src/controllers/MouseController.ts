class MouseController implements GameController {
  private eventCallbacks: GameInputEvents;
  private settings: MouseControllerSettings;

  constructor(settings: MouseControllerSettings) {
    this.settings = settings;
  }

  private emit(button: number): void {
    const settings = this.settings;
    if (button === settings.fireGun) {
      this.eventCallbacks.fireGun();
    }
  }
  listen(eventCallbacks: GameInputEvents): void {
    this.eventCallbacks = eventCallbacks;
    window.addEventListener('click', event => {
      const button =
        typeof event.which !== 'undefined' ? event.which : event.button;
      this.emit(button);
    });
    // window.addEventListener('mousemove', () => {
    //   this.emit('mousemove');
    // });
  }
}

export default MouseController;
