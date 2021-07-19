import tile00Url from "url:../img/level-0/tile-00.png";
import tile01Url from "url:../img/level-0/tile-01.png";
import tile02Url from "url:../img/level-0/tile-02.png";
import tile03Url from "url:../img/level-0/tile-03.png";
import tile04Url from "url:../img/level-0/tile-04.png";
import tile05Url from "url:../img/level-0/tile-05.png";
import tile06Url from "url:../img/level-0/tile-06.png";
import tile07Url from "url:../img/level-0/tile-07.png";
import tile08Url from "url:../img/level-0/tile-08.png";
import tile09Url from "url:../img/level-0/tile-09.png";
import tile10Url from "url:../img/level-0/tile-10.png";
import tile11Url from "url:../img/level-0/tile-11.png";
import tile12Url from "url:../img/level-0/tile-12.png";
import tile13Url from "url:../img/level-0/tile-13.png";
import { atan2, floor, lerpAngle, min } from "../helpers";
import { k } from "./kaboom";

k.loadSprite("level-0/tile-00", tile00Url);
k.loadSprite("level-0/tile-01", tile01Url);
k.loadSprite("level-0/tile-02", tile02Url);
k.loadSprite("level-0/tile-03", tile03Url);
k.loadSprite("level-0/tile-04", tile04Url);
k.loadSprite("level-0/tile-05", tile05Url);
k.loadSprite("level-0/tile-06", tile06Url);
k.loadSprite("level-0/tile-07", tile07Url);
k.loadSprite("level-0/tile-08", tile08Url);
k.loadSprite("level-0/tile-09", tile09Url);
k.loadSprite("level-0/tile-10", tile10Url);
k.loadSprite("level-0/tile-11", tile11Url);
k.loadSprite("level-0/tile-12", tile12Url);
k.loadSprite("level-0/tile-13", tile13Url);

const map = [
  // prettier-ignore
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙╭───────╮∙∙∙∙∙∙∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙╭──────┘       └─╮∙∙∙∙∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙╭─┘                └─╮∙∙∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙╭┘                    └─╮∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙╭┘                       └╮∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙│                         └╮∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙│                          └╮∙∙∙",
  "∙∙∙∙∙∙∙∙∙╰┐                          ┊∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙│    ┌┈┐                   └╮∙∙",
  "∙∙∙∙∙∙∙∙∙∙│  ┌┈╯∙╰┈┈┈┐                └╮∙",
  "∙∙∙∙∙∙∙∙∙∙│ ┌╯∙∙∙∙∙∙∙╰┐                ┊∙",
  "∙╭────────┘ ┊∙∙∙∙∙∙∙∙∙╰┐               ┊∙",
  "∙╰┐       ┌┈╯∙∙∙∙∙∙∙∙∙∙╰┐              ┊∙",
  "∙∙╰┐    ┌┈╯∙∙∙∙∙∙∙∙∙∙∙∙∙│              ┊∙",
  "∙∙∙│   ┌╯∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙│              ┊∙",
  "∙∙∙╰┐  ┊∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙│              ┊∙",
  "∙∙∙∙╰┐ └───╮∙∙∙∙∙∙∙∙∙∙∙∙│              ┊∙",
  "∙∙∙∙∙╰┈┈┐  └╮∙∙∙∙∙∙∙∙∙∙╭┘             ┌╯∙",
  "∙∙∙∙∙∙∙∙╰┈┈┐└──────────┘              ┊∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙╰┈┈┈┈┈┈┈┈┈┐               ┌╯∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙╰┈┈┈┈┈┐        ┌╯∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙╰┈┈┐   ┌┈╯∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙╰┈┈┈╯∙∙∙∙∙∙",
  "∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙",
];

export const level0 = "level-0";

k.scene(level0, () => {
  k.addLevel(map, {
    width: 64,
    height: 64,
    pos: k.vec2(0, 0),
    "∙": [k.sprite("level-0/tile-13"), k.solid()],
    "╭": [k.sprite("level-0/tile-00")],
    "╮": [k.sprite("level-0/tile-02")],
    "╯": [k.sprite("level-0/tile-12")],
    "╰": [k.sprite("level-0/tile-10")],
    "│": [k.sprite("level-0/tile-05")],
    "─": [k.sprite("level-0/tile-01")],
    " ": [k.sprite("level-0/tile-06")],
    "┌": [k.sprite("level-0/tile-03")],
    "┐": [k.sprite("level-0/tile-04")],
    "┘": [k.sprite("level-0/tile-09")],
    "└": [k.sprite("level-0/tile-08")],
    "┊": [k.sprite("level-0/tile-07")],
    "┈": [k.sprite("level-0/tile-11")],
    any: () => [],
  });

  const w = map[0]?.length ?? 0;
  const h = map.length ?? 0;

  const boat = k.add([
    k.sprite("boat-3"),
    k.area(k.vec2(-60, -80), k.vec2(60, 80)),
    k.pos(floor(w / 2 - 1) * 64, floor(h / 2 - 2) * 64),
    k.origin("center"),
    k.scale(0.5),
    k.rotate(0),
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
