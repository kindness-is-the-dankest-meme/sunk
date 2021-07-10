import kaboom from "kaboom";

import boat3Url from "url:./img/boat-3.png";

const canvas = document.querySelector("canvas");
if (!canvas) {
  throw new Error("No canvas found!");
}

const k = kaboom({
  canvas,
  fullscreen: true,
});

const { atan2, PI: π, floor, min, max } = Math;
const ππ = π * 2;

const clamp = (x: number, lower: number, upper: number) =>
  min(max(lower, x), upper);

const repeat = (t: number, m: number) => clamp(t - floor(t / m) * m, 0, m);

/**
 * @see https://github.com/mattdesl/lerp/blob/master/index.js
 */
const lerp = (v0: number, v1: number, t: number) => v0 * (1 - t) + v1 * t;

/**
 * @see https://gist.github.com/shaunlebron/8832585#gistcomment-3227412
 */
const lerpAngle = (a: number, b: number, t: number) => {
  const dt = repeat(b - a, ππ);
  return lerp(a, a + (dt > π ? dt - ππ : dt), t);
};

k.loadSprite("boat-3", boat3Url);

k.scene("level-1", () => {
  const [r, g, b] = [205, 133, 63].map((c) => c / 255);
  if (!(r && g && b)) {
    return;
  }

  k.add([k.rect(k.width(), k.height()), k.color(0, 0, 1)]);

  const boat = k.add([
    k.sprite("boat-3"),
    k.pos(80, 80),
    k.rotate(0),
    k.origin("center"),
    k.scale(0.5),
  ]);

  k.mouseDown(() => {
    const diff = k.mousePos().sub(boat.pos);
    const dist = diff.len();

    boat.move(diff.scale(min(dist, 200 / dist)));

    const targetAngle = -atan2(diff.y, diff.x);
    boat.angle = lerpAngle(boat.angle, targetAngle, 0.1);
  });
});

k.start("level-1");
