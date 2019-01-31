import { Loop } from "./loop";
import { Field } from "./components/field";
import { Figure } from "./components/figure";

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

const loop = new Loop(1);

const cells = {
  width: 10,
  height: 10
};

const context = {
  dimensions: cells,
  size: {
    width: WIDTH,
    height: HEIGHT
  },
  cell: {
    size: {
      width: WIDTH / cells.width,
      height: HEIGHT / cells.height
    }
  }
};

const components = [
  new Field({}, context),
  new Figure(
    {
      position: {
        x: 5,
        y: -3
      },
      field: [[1, 1], [0, 1], [0, 1]]
    },
    context
  )
];

loop.events.on("update", (params: { dt: number }) =>
  components.forEach(component => component.update({ dt: params.dt, ctx }))
);

loop.events.on("render", (params: { dt: number }) => {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  components.forEach(component => component.render({ dt: params.dt, ctx }));
});

loop.run();
