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

  it("should turn left", () => {
    const position = { x: 1, y: 1, orientation: "N" as Orientation };
    const robot = new Robot(position, "");

    robot.rotate("L");

    expect(robot.position.orientation).toBe("W");
  });
});
