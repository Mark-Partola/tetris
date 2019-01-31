import { Cell } from "./cell";

interface IFigureProps {
  position: IPoint;
  field: number[][];
}

interface IComponentConfig<T1, T2> {
  component: T1;
  params: T2;
}

type IFigureChildren = Array<IComponentConfig<Cell, { offset: IPoint }>>;

export class Figure implements IComponent<IFigureProps> {
  private state = {
    position: {
      ...this.props.position
    }
  };

  private components: IFigureChildren = this.getChildrenConfigs();

  constructor(
    private readonly props: IFigureProps,
    private readonly context: IComponentContext
  ) {}

  public update(params: IComponentParams) {
    if (
      this.state.position.y + this.props.field.length <
      this.context.dimensions.height
    ) {
      this.state.position.y++;
      this.updateFigure();
    }
  }

  public render(params: IComponentParams) {
    this.components.forEach(config => config.component.render(params));
  }

  private getChildrenConfigs(): IFigureChildren {
    const mappedField = this.props.field.map((row, rowIdx) =>
      row.map((cell, cellIdx) => {
        if (!cell) return null;

        const offset = {
          y: rowIdx,
          x: cellIdx
        };

        const position = this.getCellPos(offset);

        const component = new Cell({ position }, this.context);

        return {
          component,
          params: {
            offset
          }
        };
      })
    );

    return mappedField.flat().filter(Boolean) as IFigureChildren;
  }

  private updateFigure(): void {
    this.components.forEach(config =>
      this.updateCell(config.component, config.params.offset)
    );
  }

  private updateCell(cell: Cell, offset: IPoint): void {
    const pos = this.getCellPos(offset);

    cell.mapProps(props => ({
      position: {
        x: pos.x,
        y: pos.y
      }
    }));
  }

  private getCellPos(offset: IPoint) {
    return {
      x: this.state.position.x + offset.x,
      y: this.state.position.y + offset.y
    };
  }
}
