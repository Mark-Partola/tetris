import isMobile from "ismobilejs";

interface IStatsProps {
  points: number;
  level: number;
}

export class Stats implements IComponent<IStatsProps> {
  constructor(
    private props: IStatsProps,
    private readonly context: IComponentContext
  ) {}

  public update(params: IComponentParams, props: IStatsProps) {
    this.props = props;
  }

  public render({ ctx }: IComponentParams) {
    const { field, cell } = this.context;
    const offset = {
      x: isMobile.any ? 100 : field.size.width * cell.size.width + 20,
      y: isMobile.any ? field.size.height * cell.size.height + 40 : 25
    };

    ctx.font = "20px Verdana";

    ctx.fillText(`Points: ${this.props.points}`, offset.x, offset.y);

    ctx.fillText(`Level: ${this.props.level}`, offset.x, offset.y + 25);

    if (!isMobile.any) {
      ctx.fillText(
        `Level will change every 10 figures`,
        field.size.width * cell.size.width + 20,
        75
      );
    }
  }
}
