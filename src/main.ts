import {
  parseInput,
  simulateRobots,
  formatPositionsForOutput,
} from "./handler"; // Update with actual import paths

function main(inputString: string): string {
  const { grid, robots } = parseInput(inputString);
  const finalPositions = simulateRobots(grid, robots);
  const formattedResult = formatPositionsForOutput(finalPositions);
  return formattedResult;
}

if (require.main === module) {
  const input = process.argv[2];
  if (input) {
    const result = main(input);
    console.log(result);
  } else {
    console.error("Input string is missing.");
  }
}

export default main;
