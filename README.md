# Martian Robots Coding Challenge

Problem: Martian Robots
The Problem
The surface of Mars can be modelled by a rectangular grid around which robots are able to
move according to instructions provided from Earth. You are to write a program that
determines each sequence of robot positions and reports the final position of the robot.
A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by
y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).
A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the
instructions:
● Left : the robot turns left 90 degrees and remains on the current grid point.
● Right : the robot turns right 90 degrees and remains on the current grid point.
● Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.
The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).
Developer Programming Problem
Red Badger Consulting Limited
Page 1 of 3
There is also a possibility that additional command types may be required in the future and
provision should be made for this.
Since the grid is rectangular and bounded (…yes Mars is a strange planet), a robot that
moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that
prohibits future robots from dropping off the world at the same grid point. The scent is left at
the last grid position the robot occupied before disappearing over the edge. An instruction to
move “off” the world from a grid point from which a robot has been previously lost is simply
ignored by the current robot.
The Input
The first line of input is the upper-right coordinates of the rectangular world, the lower-left
coordinates are assumed to be 0, 0.
The remaining input consists of a sequence of robot positions and instructions (two lines per
robot). A position consists of two integers specifying the initial coordinates of the robot and
an orientation (N, S, E, W), all separated by whitespace on one line. A robot instruction is a
string of the letters “L”, “R”, and “F” on one line.
Each robot is processed sequentially, i.e., finishes executing the robot instructions before the
next robot begins execution.
The maximum value for any coordinate is 50.
All instruction strings will be less than 100 characters in length.
The Output
For each robot position/instruction in the input, the output should indicate the final grid
position and orientation of the robot. If a robot falls off the edge of the grid the word “LOST”
should be printed after the position and orientation.
Sample Input
5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL
Sample Output
1 1 E
Developer Programming Problem
Red Badger Consulting Limited
Page 2 of 3
3 3 N LOST
2 3 S

## Approach

I approached this exercise using TDD, using the red, green, refactor approach. Each cycle I tried to add a failing test, write the smallest amount of code to make it pass and refactor.

When writing the code, I tried to follow the clean code principles.

- ensuring functions only served one purpose.
- Functions and variables were named so that they describe what they are doing.
- Breaking down code into reusable functions so that they can be easily tested.
- Using DRY, not to repeat myself

## Development

This task is written using typescript and will attempt to solve the martian robots problem.

### Linting

Using eslint and prettier

Eslint is configured and using the recommended configuration, with a couple of additional rules.

Prettier has also been setup to override rules for code formatting.

_Note_: There was a configuration error with eslint which means it's not able to run currently. I would look to fix this if I had more time. I have left the files in place.

### Testing

Unit Tests are written using jest in typescript.

To run

````bash
npm run test
`

To run in watch mode

```bash
npm run test:watch
`

### How to run?

Compile the typescript code

```bash
npm run build
```

Run the node script

```bash
node dist/main.js "5 3
1 1 E
RFRFRFRF
3 2 N
FRRFLLFFRRFLL
0 3 W
LLFFFLFLFL"
````
