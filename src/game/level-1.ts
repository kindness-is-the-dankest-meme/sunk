import { k } from "./kaboom";

import tile01Url from "url:../img/level-1/tile-01.png";
import tile02Url from "url:../img/level-1/tile-02.png";
import tile03Url from "url:../img/level-1/tile-03.png";
import tile04Url from "url:../img/level-1/tile-04.png";
import tile05Url from "url:../img/level-1/tile-05.png";
import tile06Url from "url:../img/level-1/tile-06.png";
import tile07Url from "url:../img/level-1/tile-07.png";
import tile08Url from "url:../img/level-1/tile-08.png";
import tile09Url from "url:../img/level-1/tile-09.png";
import tile10Url from "url:../img/level-1/tile-10.png";
import tile11Url from "url:../img/level-1/tile-11.png";
import tile12Url from "url:../img/level-1/tile-12.png";
import tile13Url from "url:../img/level-1/tile-13.png";
import tile14Url from "url:../img/level-1/tile-14.png";
import tile15Url from "url:../img/level-1/tile-15.png";
import tile16Url from "url:../img/level-1/tile-16.png";
import tile17Url from "url:../img/level-1/tile-17.png";
import tile18Url from "url:../img/level-1/tile-18.png";
import tile19Url from "url:../img/level-1/tile-19.png";
import tile20Url from "url:../img/level-1/tile-20.png";
import tile21Url from "url:../img/level-1/tile-21.png";
import tile22Url from "url:../img/level-1/tile-22.png";
import tile23Url from "url:../img/level-1/tile-23.png";
import tile24Url from "url:../img/level-1/tile-24.png";
import tile25Url from "url:../img/level-1/tile-25.png";
import tile26Url from "url:../img/level-1/tile-26.png";
import tile27Url from "url:../img/level-1/tile-27.png";
import tile28Url from "url:../img/level-1/tile-28.png";
import tile29Url from "url:../img/level-1/tile-29.png";
import tile30Url from "url:../img/level-1/tile-30.png";
import tile31Url from "url:../img/level-1/tile-31.png";
import tile32Url from "url:../img/level-1/tile-32.png";
import tile33Url from "url:../img/level-1/tile-33.png";
import tile34Url from "url:../img/level-1/tile-34.png";
import tile35Url from "url:../img/level-1/tile-35.png";
import tile36Url from "url:../img/level-1/tile-36.png";
import { atan2, floor, lerpAngle, min, random } from "../helpers";

k.loadSprite("level-1/tile-01", tile01Url);
k.loadSprite("level-1/tile-02", tile02Url);
k.loadSprite("level-1/tile-03", tile03Url);
k.loadSprite("level-1/tile-04", tile04Url);
k.loadSprite("level-1/tile-05", tile05Url);
k.loadSprite("level-1/tile-06", tile06Url);
k.loadSprite("level-1/tile-07", tile07Url);
k.loadSprite("level-1/tile-08", tile08Url);
k.loadSprite("level-1/tile-09", tile09Url);
k.loadSprite("level-1/tile-10", tile10Url);
k.loadSprite("level-1/tile-11", tile11Url);
k.loadSprite("level-1/tile-12", tile12Url);
k.loadSprite("level-1/tile-13", tile13Url);
k.loadSprite("level-1/tile-14", tile14Url);
k.loadSprite("level-1/tile-15", tile15Url);
k.loadSprite("level-1/tile-16", tile16Url);
k.loadSprite("level-1/tile-17", tile17Url);
k.loadSprite("level-1/tile-18", tile18Url);
k.loadSprite("level-1/tile-19", tile19Url);
k.loadSprite("level-1/tile-20", tile20Url);
k.loadSprite("level-1/tile-21", tile21Url);
k.loadSprite("level-1/tile-22", tile22Url);
k.loadSprite("level-1/tile-23", tile23Url);
k.loadSprite("level-1/tile-24", tile24Url);
k.loadSprite("level-1/tile-25", tile25Url);
k.loadSprite("level-1/tile-26", tile26Url);
k.loadSprite("level-1/tile-27", tile27Url);
k.loadSprite("level-1/tile-28", tile28Url);
k.loadSprite("level-1/tile-29", tile29Url);
k.loadSprite("level-1/tile-30", tile30Url);
k.loadSprite("level-1/tile-31", tile31Url);
k.loadSprite("level-1/tile-32", tile32Url);
k.loadSprite("level-1/tile-33", tile33Url);
k.loadSprite("level-1/tile-34", tile34Url);
k.loadSprite("level-1/tile-35", tile35Url);
k.loadSprite("level-1/tile-36", tile36Url);

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

export const level1 = "level-1";

k.scene(level1, () => {
  const water = [
    k.sprite("level-1/tile-08"),
    k.sprite("level-1/tile-09"),
    k.sprite("level-1/tile-10"),
    k.sprite("level-1/tile-11"),
    k.sprite("level-1/tile-17"),
    k.sprite("level-1/tile-23"),
    k.sprite("level-1/tile-29"),
  ];

  const top = [
    k.sprite("level-1/tile-02"),
    k.sprite("level-1/tile-03"),
    k.sprite("level-1/tile-04"),
    k.sprite("level-1/tile-05"),
    k.sprite("level-1/tile-27"),
  ];
  const right = [
    k.sprite("level-1/tile-12"),
    k.sprite("level-1/tile-18"),
    k.sprite("level-1/tile-20"),
    k.sprite("level-1/tile-24"),
    k.sprite("level-1/tile-30"),
  ];
  const bottom = [
    k.sprite("level-1/tile-15"),
    k.sprite("level-1/tile-32"),
    k.sprite("level-1/tile-33"),
    k.sprite("level-1/tile-34"),
    k.sprite("level-1/tile-35"),
  ];
  const left = [
    k.sprite("level-1/tile-07"),
    k.sprite("level-1/tile-13"),
    k.sprite("level-1/tile-19"),
    k.sprite("level-1/tile-22"),
    k.sprite("level-1/tile-25"),
  ];

  k.addLevel(map, {
    width: 64,
    height: 64,
    pos: k.vec2(0, 0),
    "∙": [k.sprite("level-1/tile-21"), k.solid()],
    "╭": [k.sprite("level-1/tile-01")],
    "╮": [k.sprite("level-1/tile-06")],
    "╰": [k.sprite("level-1/tile-31")],
    "╯": [k.sprite("level-1/tile-36")],
    "│": [(() => left[floor(random() * left.length)])()],
    "─": [(() => top[floor(random() * top.length)])()],
    " ": [(() => water[floor(random() * water.length)])()],
    "┌": [k.sprite("level-1/tile-14")],
    "┐": [k.sprite("level-1/tile-16")],
    "┘": [k.sprite("level-1/tile-28")],
    "└": [k.sprite("level-1/tile-26")],
    "┊": [(() => right[floor(random() * right.length)])()],
    "┈": [(() => bottom[floor(random() * bottom.length)])()],
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
