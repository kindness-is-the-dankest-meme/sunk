import kaboom from "kaboom";

const canvas = document.querySelector("canvas");
if (!canvas) {
  throw new Error("No canvas found!");
}

export const k = kaboom({
  canvas,
  fullscreen: true,
});
