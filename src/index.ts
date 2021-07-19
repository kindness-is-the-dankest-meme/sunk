import kaboom from "kaboom";
import boat3Url from "url:./img/boat-3.png";
import tile00Url from "url:./img/tile-00.png";
import tile01Url from "url:./img/tile-01.png";
import tile02Url from "url:./img/tile-02.png";
import tile03Url from "url:./img/tile-03.png";
import tile04Url from "url:./img/tile-04.png";
import tile05Url from "url:./img/tile-05.png";
import tile06Url from "url:./img/tile-06.png";
import tile07Url from "url:./img/tile-07.png";
import tile08Url from "url:./img/tile-08.png";
import tile09Url from "url:./img/tile-09.png";
import tile10Url from "url:./img/tile-10.png";
import tile11Url from "url:./img/tile-11.png";
import tile12Url from "url:./img/tile-12.png";
import tile13Url from "url:./img/tile-13.png";
import { level1 } from "./game/level-1";

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
k.loadSprite("tile-00", tile00Url);
k.loadSprite("tile-01", tile01Url);
k.loadSprite("tile-02", tile02Url);
k.loadSprite("tile-03", tile03Url);
k.loadSprite("tile-04", tile04Url);
k.loadSprite("tile-05", tile05Url);
k.loadSprite("tile-06", tile06Url);
k.loadSprite("tile-07", tile07Url);
k.loadSprite("tile-08", tile08Url);
k.loadSprite("tile-09", tile09Url);
k.loadSprite("tile-10", tile10Url);
k.loadSprite("tile-11", tile11Url);
k.loadSprite("tile-12", tile12Url);
k.loadSprite("tile-13", tile13Url);

k.scene("level-3", () => {
  const [r, g, b] = [205, 133, 63].map((c) => c / 255);
  if (!(r && g && b)) {
    return;
  }

  // k.add([k.rect(k.width(), k.height()), k.color(0, 0, 1)]);

  k.addLevel(level1, {
    width: 64,
    height: 64,
    pos: k.vec2(0, 0),
    "∙": [k.sprite("tile-13"), k.solid()],
    "╭": [k.sprite("tile-00")],
    "╮": [k.sprite("tile-02")],
    "╯": [k.sprite("tile-12")],
    "╰": [k.sprite("tile-10")],
    "│": [k.sprite("tile-05")],
    "─": [k.sprite("tile-01")],
    " ": [k.sprite("tile-06")],
    "┌": [k.sprite("tile-03")],
    "┐": [k.sprite("tile-04")],
    "┘": [k.sprite("tile-09")],
    "└": [k.sprite("tile-08")],
    "┊": [k.sprite("tile-07")],
    "┈": [k.sprite("tile-11")],
    any: () => [],
  });

  const boat = k.add([
    k.sprite("boat-3"),
    k.area(k.vec2(-60, -80), k.vec2(60, 80)),
    k.pos(k.width() / 2, k.height() / 2),
    k.rotate(0),
    k.origin("center"),
    k.scale(0.5),
  ]);

  boat.action(() => {
    k.camPos(boat.pos);
    boat.resolve();
  });

  k.mouseDown(() => {
    const diff = k.mousePos().sub(boat.pos);
    const dist = diff.len();

    boat.move(diff.scale(min(dist, 200 / dist)));

    const targetAngle = -atan2(diff.y, diff.x);
    boat.angle = lerpAngle(boat.angle, targetAngle, 0.1);
  });
});

k.start("level-3");
