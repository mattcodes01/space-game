interface GameInputEvents {
  accelerate?: () => void;
  decelerate?: () => void;
  rotateShipCounterClockwise?: () => void;
  rotateShipClockwise?: () => void;
  fireGun?: () => void;
}
