import Mars from "./Mars";
import Robot from "./Robot";
import { Orientation, Position } from "./types";

export function parseInput(input: string): { grid: Mars; robots: Robot[] } {
  if (!input) {
    throw new Error("Input is empty");
  }

  const lines = input.trim().split("\n");
  const [coords, ...robotOperations] = lines;
  const [width, height] = coords.split(/ /);

  const grid = new Mars(Number(width), Number(height));
  const robots: Robot[] = [];

  for (let i = 0; i < robotOperations.length; i += 2) {
    const nextOperations = robotOperations.slice(i, i + 2);
    const [position, instructions] = nextOperations;
    const [x, y, orientation] = position.split(/ /);

    const positionData = {
      x: Number(x),
      y: Number(y),
      orientation: orientation as Orientation,
    };

    const robot = new Robot(positionData, instructions);
    robots.push(robot);
  }

  return { grid, robots };
}

export function simulateRobots(grid: Mars, robots: Robot[]): Position[] {
  const finalPositions: Position[] = [];

  for (const robot of robots) {
    robot.move(grid);
    finalPositions.push(robot.position);
  }

  return finalPositions;
}
