export default class Mars {
  width: number;
  height: number;
  private scents: Set<string> = new Set();

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  addScent(x: number, y: number): void {
    const scentCoordinates = `${x},${y}`;
    this.scents.add(scentCoordinates);
  }

  hasScent(x: number, y: number): boolean {
    const scentCoordinates = `${x},${y}`;
    return this.scents.has(scentCoordinates);
  }
}
