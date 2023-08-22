import { Position } from "./types";

export default class Robot {
  position: Position;
  instructions: string;

  constructor(position: Position, instruction: string) {
    this.position = position;
    this.instructions = instruction;
  }
}
