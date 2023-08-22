export type Position = {
  x: number;
  y: number;
  orientation: Orientation;
  isLost?: boolean;
};

export type Orientation = "N" | "E" | "S" | "W";
