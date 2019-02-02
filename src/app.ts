import { Loop } from "./loop";
import { GameController } from "./game-controller";

const WIDTH = 800;
const HEIGHT = 600;

const canvas = document.createElement("canvas");

document.body.style.margin = "0";
document.body.style.display = "flex";
document.body.style.height = "100vh";
document.body.style.background = "black";

canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.display = "block";
canvas.style.margin = "auto";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const loop = new Loop(5);
const game = new GameController({
  dimensions: {
    width: 300,
    height: 400
  }
});

loop.events.on("update", ({ dt }: { dt: number }) => {
  game.update({ dt, ctx });
});

loop.events.on("render", ({ dt }: { dt: number }) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  game.render({ dt, ctx });
});

loop.run();
