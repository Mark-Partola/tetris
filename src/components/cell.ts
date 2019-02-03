interface ICellProps {
  position: IPoint;
  offset?: IPoint;
  size?: IDimensions;
}

export class Cell implements IComponent<ICellProps> {
  constructor(
    private readonly props: ICellProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    const { cell } = this.context;
    const { position, offset = { x: 0, y: 0 } } = this.props;
    const size = this.props.size || cell.size;

    ctx.beginPath();
    ctx.fillStyle = cell.color;

    ctx.rect(
      offset.x + position.x * size.width + 1,
      offset.y + position.y * size.height + 1,
      size.width - 2,
      size.height - 2
    );

    ctx.fill();
  }
}
