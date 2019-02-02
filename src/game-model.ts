interface IFieldApplyParams {
  field: IFieldMap[][];
  points: IPoint[];
  value: IFieldMap;
}

export class GameModel {
  private field: IFieldMap[][];

  private points: number = 0;

  private figure: IFigure;

  constructor(private context: IComponentContext) {
    this.field = Array.from({ length: this.context.dimensions.height }, () =>
      Array.from({ length: this.context.dimensions.width }, () => null)
    );

    this.figure = this.getNext();
  }

  public setFigureToField(figure: IFigure): void {
    this.applyToField({
      field: this.field,
      points: this.getCoords(figure),
      value: 1
    });
  }

  public unsetFigureFromField(figure: IFigure): void {
    this.applyToField({
      field: this.field,
      points: this.getCoords(figure),
      value: null
    });
  }

  public checkCollision(figure: IFigure) {
    const { height, width } = this.context.dimensions;
    const points = this.getCoords(figure);

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
      const row = this.field[point.y];
      const cell = row && row[point.x];

      if (cell || maxY >= height || minX < 0 || maxX >= width) {
        return true;
      }
    }

    return false;
  }

  public rotate() {
    this.unsetFigureFromField(this.figure);

    const flipMatrix = (matrix: IFieldMap[][]) =>
      matrix[0].map((column, index) => matrix.map(row => row[index]));

    const rotateMatrix = (matrix: IFieldMap[][]) =>
      flipMatrix(matrix.reverse());

    this.figure = {
      ...this.figure,
      field: rotateMatrix(this.figure.field)
    };

    this.setFigureToField(this.figure);
  }

  public move({ x = 0, y = 0 }: IDeltaPoint) {
    this.unsetFigureFromField(this.figure);

    const nextFigure = {
      ...this.figure,
      position: {
        y: this.figure.position.y + y,
        x: this.figure.position.x + x
      }
    };

    if (this.checkCollision(nextFigure)) {
      this.setFigureToField(this.figure);

      if (x) return;

      if (y) {
        this.removeMatches();
      }

      this.figure = this.getNext();
    } else {
      this.figure = nextFigure;
    }

    this.setFigureToField(this.figure);
  }

  public getNext() {
    this.points++;

    const figures = [
      [[1, 1], [0, 1], [0, 1]],
      [[1, 1], [1, 1]],
      [[1, 1, 1, 1]],
      [[1, 1, 1], [0, 1, 0]],
      [[1, 1, 0], [0, 1, 1]],
      [[0, 1, 1], [1, 1, 0]],
      [[1]]
    ];

    return {
      position: {
        x: ~~(this.context.dimensions.width / 2),
        y: -3
      },
      field: figures[~~(Math.random() * figures.length)]
    };
  }

  public getModel() {
    return {
      field: this.field,
      points: this.points
    };
  }

  private applyToField({ field, points, value }: IFieldApplyParams) {
    points.forEach(point => {
      const row = field[point.y];

      if (row) {
        row[point.x] = value;
      }
    });
  }

  private getCoords(figure: IFigure) {
    return figure.field.reduce(
      (acc, curr, rowIdx) => {
        curr.forEach((pattern, cellIdx) => {
          if (pattern) {
            acc.push({
              x: figure.position.x + cellIdx,
              y: figure.position.y + rowIdx
            });
          }
        });

        return acc;
      },
      [] as IPoint[]
    );
  }

  private removeMatches() {
    const { width, height } = this.context.dimensions;

    for (let i = height - 1; i >= 0; i--) {
      for (let j = 0; j < width; j++) {
        if (!this.field[i][j]) break;

        if (j === width - 1) {
          this.removeRow(i);
          i++;
        }
      }
    }
  }

  private removeRow(yPosition: number) {
    this.points += 10;

    for (let i = yPosition; i >= 0; i--) {
      for (let j = 0; j < this.context.dimensions.width; j++) {
        const prev = this.field[i - 1];
        this.field[i][j] = prev ? prev[j] : null;
      }
    }
  }
}
