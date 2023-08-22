import {
  formatPositionsForOutput,
  parseInput,
  simulateRobots,
} from "../src/handler";

describe("Mars", () => {
  it("parse input and validates input is not empty", () => {
    expect(() => parseInput("")).toThrow("Input is empty");
  });

  it("should simulate robot movements and update positions", () => {
    const input =
      "5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL";

    const { grid, robots } = parseInput(input);

    expect(grid).toEqual({ width: 5, height: 3 });
    expect(robots).toHaveLength(3);

    expect(robots[0]).toEqual({
      position: { x: 1, y: 1, orientation: "E" },
      instructions: "RFRFRFRF",
    });

    expect(robots[1]).toEqual({
      position: { x: 3, y: 2, orientation: "N" },
      instructions: "FRRFLLFFRRFLL",
    });

    expect(robots[2]).toEqual({
      position: { x: 0, y: 3, orientation: "W" },
      instructions: "LLFFFLFLFL",
    });

    const finalPositions = simulateRobots(grid, robots);

    expect(finalPositions).toEqual([
      { x: 1, y: 1, orientation: "E" },
      { x: 3, y: 1, orientation: "N" },
      { x: 2, y: 3, orientation: "S" },
    ]);

    expect(formatPositionsForOutput(finalPositions)).toEqual(
      "1 1 E\n3 1 N\n2 3 S",
    );
  });

  it("should mark robot as LOST if it moves off grid", () => {
    const input = "5 3\n1 1 E\nLFFFFF";

    const { grid, robots } = parseInput(input);

    expect(grid).toEqual({ width: 5, height: 3 });

    expect(robots).toHaveLength(1);

    expect(robots[0]).toEqual({
      position: { x: 1, y: 1, orientation: "E" },
      instructions: "LFFFFF",
    });

    const finalPositions = simulateRobots(grid, robots);

    expect(finalPositions).toEqual([
      { x: 1, y: 0, orientation: "N", isLost: true },
    ]);

    expect(formatPositionsForOutput(finalPositions)).toEqual("1 0 N LOST");
  });
});
