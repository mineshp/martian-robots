import Mars from "../src/Mars";
import Robot from "../src/Robot";
import { Orientation } from "../src/types";

describe("Robot", () => {
  it("should be initialised with position and instructions", () => {
    const position = { x: 5, y: 3, orientation: "N" as Orientation };
    const instructions = "RFRFRFRF";

    const robot = new Robot(position, instructions);

    expect(robot.position).toEqual({
      x: 5,
      y: 3,
      orientation: "N",
    });

    expect(robot.instructions).toEqual(instructions);
  });

  test.each([
    ["L", "W"],
    ["R", "E"],
  ])("should turn %s", (direction, orientation) => {
    const position = { x: 1, y: 1, orientation: "N" as Orientation };
    const robot = new Robot(position, "");

    robot.rotate(direction as "L" | "R");

    expect(robot.position.orientation).toBe(orientation);
  });

  test.each([
    ["N", 1, 0],
    ["E", 2, 1],
    ["S", 1, 2],
    ["W", 0, 1],
  ])(
    "should move forward to correct position facing %s",
    (direction, xPos, yPos) => {
      const position = { x: 1, y: 1, orientation: direction as Orientation };
      const robot = new Robot(position, "");
      const grid = new Mars(5, 3);
      robot.forward(grid);

      expect(robot.position.x).toBe(xPos);
      expect(robot.position.y).toBe(yPos);
    },
  );
});
