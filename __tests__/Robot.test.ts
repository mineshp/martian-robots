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

  it("should turn right", () => {
    const position = { x: 1, y: 1, orientation: "N" as Orientation };
    const robot = new Robot(position, "");

    robot.rotate("R");

    expect(robot.position.orientation).toBe("E");
  });

  it("should move forward facing north", () => {
    const position = { x: 1, y: 1, orientation: "N" as Orientation };
    const robot = new Robot(position, "");

    robot.forward({ width: 5, height: 3 });

    expect(robot.position.x).toBe(1);
    expect(robot.position.y).toBe(0);
  });

  it("should move forward facing east", () => {
    const position = { x: 1, y: 1, orientation: "E" as Orientation };
    const robot = new Robot(position, "");

    robot.forward({ width: 5, height: 3 });

    expect(robot.position.x).toBe(2);
    expect(robot.position.y).toBe(1);
  });

  it("should move forward facing south", () => {
    const position = { x: 1, y: 1, orientation: "S" as Orientation };
    const robot = new Robot(position, "");

    robot.forward({ width: 5, height: 3 });

    expect(robot.position.x).toBe(1);
    expect(robot.position.y).toBe(2);
  });

  it("should move forward facing west", () => {
    const position = { x: 1, y: 1, orientation: "W" as Orientation };
    const robot = new Robot(position, "");

    robot.forward({ width: 5, height: 3 });

    expect(robot.position.x).toBe(0);
    expect(robot.position.y).toBe(1);
  });
});
