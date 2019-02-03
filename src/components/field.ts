interface IFieldProps {}

export class Field implements IComponent<IFieldProps> {
  constructor(
    private readonly props: IFieldProps,
    private readonly context: IComponentContext
  ) {}

  public update(): void {}

  public render({ ctx }: IComponentParams): void {
    const { field, cell } = this.context;

    ctx.beginPath();
    ctx.strokeStyle = field.color;

    for (let i = 0; i <= field.size.height; i++) {
      ctx.moveTo(0, i * cell.size.height);
      ctx.lineTo(field.size.width * cell.size.width, i * cell.size.height);
    }

    for (let i = 0; i <= field.size.width; i++) {
      ctx.moveTo(i * cell.size.width, 0);
      ctx.lineTo(i * cell.size.width, field.size.height * cell.size.height);
    }

    ctx.stroke();
  }
}
