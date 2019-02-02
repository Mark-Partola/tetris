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
    ctx.font = "30px Arial";

    ctx.fillText(
      `points: ${this.props.points}`,
      this.context.size.width + 20,
      30
    );
  }
}
