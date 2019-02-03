interface IGameOverProps {
  points: number;
}

export class GameOver implements IComponent<IGameOverProps> {
  constructor(
    private readonly props: IGameOverProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    const { canvas } = this.context;

    ctx.font = "50px Arial";
    ctx.textAlign = "center";

    ctx.fillText("Game Over", canvas.size.width / 2, canvas.size.height / 2);

    ctx.font = "30px Arial";

    ctx.fillText(
      `Your points: ${this.props.points}`,
      canvas.size.width / 2,
      canvas.size.height / 2 + 50
    );
  }
}
