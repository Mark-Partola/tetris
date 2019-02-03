import isMobile from "ismobilejs";
import { Field } from "./field";
import { Cell } from "./cell";

interface INextFigureProps {
  figure: IFieldMap[][];
}

export class NextFigure implements IComponent<INextFigureProps> {
  private offset = {
    x: isMobile.any
      ? 20
      : this.context.field.size.width * this.context.cell.size.width + 20,
    y: isMobile.any
      ? this.context.field.size.height * this.context.cell.size.height + 20
      : 100
  };

  private field = new Field(
    {
      offset: this.offset,
      fieldSize: {
        width: 5,
        height: 5
      },
      cellSize: {
        width: 10,
        height: 10
      }
    },
    this.context
  );

  constructor(
    private props: INextFigureProps,
    private readonly context: IComponentContext
  ) {}

  public update(params: IComponentParams, props: INextFigureProps): void {
    this.props = props;
  }

  public render(params: IComponentParams): void {
    this.field.render(params);

    this.renderCells(params);
  }

  private renderCells(params: IComponentParams) {
    const figure = this.props.figure;

    figure.forEach((row, y) =>
      row.forEach((cell, x) => {
        if (!cell) return;

        const component = new Cell(
          {
            offset: this.offset,
            position: { x, y },
            size: {
              width: 10,
              height: 10
            }
          },
          this.context
        );

        component.render(params);
      })
    );
  }
}
