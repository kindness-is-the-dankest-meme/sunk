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
    k.rect(40, 100),
    k.pos(80, 80),
    k.color(k.rgb(r, g, b)),
    k.origin("center"),
  ]);

  k.mouseDown(() => {
    const diff = k.mousePos().sub(boat.pos);
    const dist = diff.len();

    boat.move(diff.scale(Math.min(dist, 50 / dist)));
  });
});

k.start("level-1");
