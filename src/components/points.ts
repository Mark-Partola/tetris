interface IPointProps {
  points: number;
}

export class Points implements IComponent<IPointProps> {
  constructor(
    private props: IPointProps,
    private readonly context: IComponentContext
  ) {}

  public update(params: IComponentParams, props: IPointProps) {
    this.props = props;
  }

  public render({ ctx }: IComponentParams) {
    const { field, cell } = this.context;

    ctx.font = "20px Verdana";

    ctx.fillText(
      `points: ${this.props.points}`,
      field.size.width * cell.size.width + 20,
      20
    );
  }
}
