interface ICellProps {
  position: IPoint;
}

export class Cell implements IComponent<ICellProps> {
  constructor(
    private props: ICellProps,
    private readonly context: IComponentContext
  ) {}

  public mapProps(map: (props: ICellProps) => ICellProps): void {
    this.props = map(this.props);
  }

  public update(params: IComponentParams): void {
    // pass
  }

  public render({ ctx }: IComponentParams): void {
    const { cell } = this.context;
    const { position } = this.props;

    ctx.beginPath();
    ctx.fillStyle = "#6f7f90";

    ctx.rect(
      position.x * cell.size.width + 1,
      position.y * cell.size.height + 1,
      cell.size.width - 2,
      cell.size.height - 2
    );

    ctx.fill();
  }
}
