export const { atan2, PI: π, floor, min, max, random } = Math;
export const ππ = π * 2;

export const clamp = (x: number, lower: number, upper: number) =>
  min(max(lower, x), upper);

export const repeat = (t: number, m: number) =>
  clamp(t - floor(t / m) * m, 0, m);

/**
 * @see https://github.com/mattdesl/lerp/blob/master/index.js
 */
export const lerp = (v0: number, v1: number, t: number) =>
  v0 * (1 - t) + v1 * t;

/**
 * @see https://gist.github.com/shaunlebron/8832585#gistcomment-3227412
 */
export const lerpAngle = (a: number, b: number, t: number) => {
  const dt = repeat(b - a, ππ);
  return lerp(a, a + (dt > π ? dt - ππ : dt), t);
};
