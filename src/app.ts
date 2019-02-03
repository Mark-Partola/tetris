import isMobile from "ismobilejs";
import { Loop } from "./loop";
import { GameController } from "./game-controller";

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

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

const loop = new Loop(60);
const game = new GameController({
  canvas: {
    size: {
      width: WIDTH,
      height: HEIGHT
    }
  },
  field: {
    size: {
      width: 15,
      height: 20
    },
    color: "#3f4f60"
  },
  cell: {
    size: {
      width: isMobile.any ? WIDTH / 15 : 20,
      height: isMobile.any ? HEIGHT / 30 : 20
    },
    color: "#6f7f90"
  }
});

loop.events.on("update", ({ dt }: { dt: number }) => game.update({ dt, ctx }));

loop.events.on("render", ({ dt }: { dt: number }) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  game.render({ dt, ctx });
});

loop.run();
