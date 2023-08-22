import Mars from "./Mars";
import { Position, Orientation } from "./types";

export default class Robot {
  position: Position;
  instructions: string;

  constructor(position: Position, instruction: string) {
    this.position = position;
    this.instructions = instruction;
  }

  move(grid: Mars) {
    for (const instructions of this.instructions) {
      console.log(instructions);
    }
  }

  rotate(direction: "L" | "R") {
    const orientations = ["N", "E", "S", "W"];
    const currentOrientation = orientations.indexOf(this.position.orientation);
    const changeDirection = direction === "R" ? 1 : -1;
    const newOrientationIndex = (currentOrientation + changeDirection + 4) % 4;
    this.position.orientation = orientations[
      newOrientationIndex
    ] as Orientation;
  }
}
