import Mars from "../src/Mars";

export function parseInput(input: string) {
  const [coords] = input.split(/\n/);
  const [x, y] = coords.split(/ /);

  const grid = new Mars(parseInt(x), parseInt(y));
  return { grid };
}
