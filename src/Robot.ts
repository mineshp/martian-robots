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
    for (const instruction of this.instructions) {
      if (instruction === "L" || instruction === "R") {
        this.rotate(instruction);
      } else if (instruction === "F") {
        this.forward(grid);
      }
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
    const { x, y, orientation } = this.position;
    let newPosition: Position = { ...this.position };

    if (orientation === "N") {
      if (y < grid.height && !grid.hasScent(x, y - 1)) {
        newPosition = { x, y: y - 1, orientation };
      }
    } else if (orientation === "E") {
      if (x < grid.width && !grid.hasScent(x + 1, y)) {
        newPosition = { x: x + 1, y, orientation };
      }
    } else if (orientation === "S" && !grid.hasScent(x, y + 1)) {
      if (y < grid.height) {
        newPosition = { x, y: y + 1, orientation };
      }
    } else if (orientation === "W" && !grid.hasScent(x - 1, y)) {
      if (x < grid.width) {
        newPosition = { x: x - 1, y, orientation };
      }
    }

    if (this.isPositionWithinGrid(newPosition, grid)) {
      this.position = newPosition;
    } else {
      this.position = { ...this.position, isLost: true };
      grid.addScent(x, y);
    }
  }

  private isPositionWithinGrid(position: Position, grid: Mars): boolean {
    const { x, y } = position;
    return x >= 0 && x <= grid.width && y >= 0 && y <= grid.height;
  }
}
