interface IGameOverProps {
  points: number;
}

export class GameOver implements IComponent<IGameOverProps> {
  constructor(
    private props: IGameOverProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    ctx.font = "50px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
      "Game Over.",
      this.context.size.width / 2,
      this.context.size.height / 2
    );

    ctx.font = "30px Arial";

    ctx.fillText(
      `Your points: ${this.props.points}`,
      this.context.size.width / 2,
      this.context.size.height / 2 + 50
    );
  }
}
