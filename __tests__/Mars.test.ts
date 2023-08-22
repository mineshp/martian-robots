import { parseInput } from "../src/handler";

describe("Mars", () => {
  it("parse input and create grid", () => {
    const input = "5 3\n1 1 E\nRFRFRFRF";

    const { grid } = parseInput(input);

    expect(grid).toEqual({ width: 5, height: 3 });
  });
});
