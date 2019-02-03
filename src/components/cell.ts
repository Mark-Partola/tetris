interface ICellProps {
  position: IPoint;
}

export class Cell implements IComponent<ICellProps> {
  constructor(
    private readonly props: ICellProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    const { cell } = this.context;
    const { position } = this.props;

    ctx.beginPath();
    ctx.fillStyle = cell.color;

    ctx.rect(
      position.x * cell.size.width + 1,
      position.y * cell.size.height + 1,
      cell.size.width - 2,
      cell.size.height - 2
    );

    ctx.fill();
  }
}
