import { FieldModel } from "./field-model";
import { FigureModel } from "./figure-model";
import { PointsModel } from "./points-model";
import { LevelModel } from "./level-model";

export class GameModel {
  private points = new PointsModel();

  private field = new FieldModel(this.context);

  private figure = new FigureModel(this.context);

  private level = new LevelModel();

  private gameOver: boolean = false;

  constructor(private readonly context: IComponentContext) {}

  public setPointsToField(points: IPoint[]): void {
    this.field.applyToField({
      points,
      value: 1
    });
  }

  public unsetPointsFromField(points: IPoint[]): void {
    this.field.applyToField({
      points,
      value: null
    });
  }

  public checkCollision(points: IPoint[]) {
    const { height, width } = this.context.field.size;
    const field = this.field.getField();

    const coords = points.reduce(
      (acc, curr) => {
        acc.xs.push(curr.x);
        acc.ys.push(curr.y);
        return acc;
      },
      { xs: [], ys: [] } as { xs: number[]; ys: number[] }
    );

    const maxY = Math.max(...coords.ys);
    const minX = Math.min(...coords.xs);
    const maxX = Math.max(...coords.xs);

    for (let i = points.length - 1; i >= 0; i--) {
      const point = points[i];
      const row = field[point.y];
      const cell = row && row[point.x];

      if (cell || maxY >= height || minX < 0 || maxX >= width) {
        return true;
      }
    }

    return false;
  }

  public rotate() {
    const currentPoints = this.figure.getPoints();
    const nextFigure = this.figure.getRotate();
    const nextPoints = this.figure.getPoints(nextFigure);

    this.unsetPointsFromField(currentPoints);

    if (!this.checkCollision(nextPoints)) {
      this.figure.update(nextFigure);
      this.setPointsToField(nextPoints);
    } else {
      this.setPointsToField(currentPoints);
    }
  }

  public move({ x = 0, y = 0 }: IDeltaPoint) {
    const currentPoints = this.figure.getPoints();
    const nextFigure = this.figure.getMove({ y, x });
    const nextPoints = this.figure.getPoints(nextFigure);

    this.unsetPointsFromField(currentPoints);

    if (this.checkCollision(nextPoints)) {
      this.setPointsToField(currentPoints);

      if (y) {
        const matches = this.field.removeMatches();
        this.points.add({
          type: "match",
          count: matches
        });

        if (this.checkGameOver()) {
          this.gameOver = true;
        }

        this.nextFigure();
      }
    } else {
      this.figure.update(nextFigure);
      this.setPointsToField(nextPoints);
    }
  }

  public nextFigure(): void {
    this.level.incFigures();
    this.points.add({ type: "next" });

    const nextFigure = this.figure.getNext();
    this.figure.setNext(nextFigure);
  }

  public getModel() {
    return {
      field: this.field.getField(),
      points: this.points.getPoints(),
      level: this.level.getLevel(),
      nextFigure: this.figure.getNext().field,
      gameOver: this.gameOver
    };
  }

  private checkGameOver() {
    const { size } = this.context.field;
    const field = this.field.getField();

    for (let i = 0; i < size.width; i++) {
      if (field[0][i]) {
        return true;
      }
    }

    return false;
  }
}
