const degToRad = (deg: number) => {
  return deg * (Math.PI / 180);
};

const radToDeg = (rad: number) => {
  return rad * (180 / Math.PI);
};

export { degToRad, radToDeg };
