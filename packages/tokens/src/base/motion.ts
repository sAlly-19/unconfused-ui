import { Motion } from "../types";

export const motion: Motion = {
  spring: {
    snappy: { damping: 20, stiffness: 300, mass: 0.8 },
    bouncy: { damping: 12, stiffness: 200, mass: 1 },
    gentle: { damping: 25, stiffness: 120, mass: 1 },
  },
  duration: {
    fast: 150,
    normal: 250,
    slow: 350,
  },
};
