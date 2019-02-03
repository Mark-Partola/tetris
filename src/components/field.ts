interface IFieldProps {
  offset?: IPoint;
  cellSize?: IDimensions;
  fieldSize?: IDimensions;
}

export class Field implements IComponent<IFieldProps> {
  constructor(
    private readonly props: IFieldProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    const { field, cell } = this.context;
    const { offset = { x: 0, y: 0 } } = this.props;
    const cellSize = this.props.cellSize || cell.size;
    const fieldSize = this.props.fieldSize || field.size;

    ctx.beginPath();
    ctx.strokeStyle = field.color;

    for (let i = 0; i <= fieldSize.height; i++) {
      ctx.moveTo(offset.x, i * cellSize.height + offset.y);
      ctx.lineTo(
        offset.x + fieldSize.width * cellSize.width,
        i * cellSize.height + offset.y
      );
    }

    for (let i = 0; i <= fieldSize.width; i++) {
      ctx.moveTo(offset.x + i * cellSize.width, offset.y);
      ctx.lineTo(
        offset.x + i * cellSize.width,
        fieldSize.height * cellSize.height + offset.y
      );
    }

    ctx.stroke();
  }
}
