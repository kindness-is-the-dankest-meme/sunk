import kaboom from "kaboom";

const canvas = document.querySelector("canvas");
if (!canvas) {
  throw new Error("No canvas found!");
}

const k = kaboom({
  canvas,
  fullscreen: true,
});

k.scene("level-1", () => {
  const [r, g, b] = [205, 133, 63].map((c) => c / 255);
  if (!(r && g && b)) {
    return;
  }

  const boat = k.add([
    k.rect(100, 40),
    k.pos(80, 80),
    k.rotate(0),
    k.color(k.rgb(r, g, b)),
    k.origin("center"),
  ]);

  k.mouseDown(() => {
    const diff = k.mousePos().sub(boat.pos);
    const dist = diff.len();

    boat.move(diff.scale(Math.min(dist, 200 / dist)));

    const targetTurn = -Math.atan2(diff.y, diff.x) - boat.angle;
    // const absTurn = Math.abs(targetTurn);
    // const maxTurn = Math.PI / 100;
    // const sign = absTurn === 0 ? 1 : targetTurn / absTurn;
    boat.angle += targetTurn; // sign * Math.min(absTurn, maxTurn);
    console.log((boat.angle * (180 / Math.PI)).toFixed(2));
  });
});

k.start("level-1");
