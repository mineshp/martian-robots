import Mars from "../src/Mars";

describe("Mars", () => {
  it("should add and have scents", () => {
    const mars = new Mars(5, 5);

    mars.addScent(2, 3);

    expect(mars.hasScent(2, 3)).toBe(true);
    expect(mars.hasScent(1, 1)).toBe(false);
  });
});
