export class FigureModel {
  private figures = [
    [[0, 0, 0, 0], [0, 1, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]],
    [[1, 1], [1, 1]],
    [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0]
    ],
    [[0, 0, 0, 0, 0], [0, 1, 1, 1, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]],
    [[1, 1, 0], [0, 1, 1]],
    [[0, 1, 1], [1, 1, 0]],
    [[1]]
  ];

  private figure: IFigure;

  private next: IFigure;

  constructor(private readonly context: IComponentContext) {
    this.figure = this.getRandomFigure();
    this.next = this.getRandomFigure();
  }

  public setNext(figure: IFigure): void {
    this.figure = figure;
    this.next = this.getRandomFigure();
  }

  public update(figure: IFigure): void {
    this.figure = figure;
  }

  public getNext() {
    return this.next;
  }

  public getRotate(): IFigure {
    const flipMatrix = (matrix: IFieldMap[][]) =>
      matrix[0].map((column, idx) => matrix.map(row => row[idx]));

    const rotateMatrix = (matrix: IFieldMap[][]) =>
      flipMatrix(JSON.parse(JSON.stringify(matrix)).reverse());

    return {
      ...this.figure,
      field: rotateMatrix(this.figure.field)
    };
  }

  public getMove(delta: IPoint): IFigure {
    return {
      ...this.figure,
      position: {
        y: this.figure.position.y + delta.y,
        x: this.figure.position.x + delta.x
      }
    };
  }

  public getPoints(figure: IFigure = this.figure): IPoint[] {
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

  private getRandomFigure(): IFigure {
    const field = this.figures[~~(Math.random() * this.figures.length)];

    return {
      position: {
        x: ~~(this.context.field.size.width / 2),
        y: -field.length
      },
      field
    };
  }
}
