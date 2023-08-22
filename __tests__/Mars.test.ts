import { parseInput } from "../src/handler";

describe("Mars", () => {
  it("parse input validates input is not empty", () => {
    expect(() => parseInput("")).toThrow("Input is empty");
  });

  it("parse input, create grid and robots", () => {
    const input = "5 3\n1 1 E\nRFRFRFRF";

    const { grid, robots } = parseInput(input);

    expect(grid).toEqual({ width: 5, height: 3 });
    expect(robots).toHaveLength(1);
    expect(robots[0]).toEqual({
      position: { x: 1, y: 1, orientation: "E" },
      instructions: "RFRFRFRF",
    });
  });
});
