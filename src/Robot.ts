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
    const currentOrientationIndex = orientations.indexOf(
      this.position.orientation,
    );
    const changeDirection = direction === "R" ? 1 : -1;
    const newOrientationIndex =
      (currentOrientationIndex + changeDirection + 4) % 4;
    this.position.orientation = orientations[
      newOrientationIndex
    ] as Orientation;
  }

  forward(grid: Mars) {
    if (this.position.orientation === "N") {
      if (this.position.y < grid.height) {
        return this.position.y--;
      }
    } else if (this.position.orientation === "E") {
      if (this.position.x < grid.width) {
        return this.position.x++;
      }
    } else if (this.position.orientation === "S") {
      if (this.position.y < grid.height) {
        return this.position.y++;
      }
    } else if (this.position.orientation === "W") {
      if (this.position.x < grid.width) {
        return this.position.x--;
      }
    }
  }
}
