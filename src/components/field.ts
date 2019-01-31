interface IFieldProps {}

export class Field implements IComponent<IFieldProps> {
  constructor(
    private readonly props: IFieldProps,
    private readonly context: IComponentContext
  ) {}

  public update({ dt }: IComponentParams): void {
    // pass
  }

  public render({ ctx }: IComponentParams): void {
    ctx.beginPath();
    ctx.strokeStyle = "#6f7f90";

    for (let i = 0; i <= this.context.dimensions.height; i++) {
      ctx.moveTo(0, i * this.context.cell.size.height);
      ctx.lineTo(
        this.context.dimensions.width * this.context.cell.size.width,
        i * this.context.cell.size.height
      );
    }

    for (let i = 0; i <= this.context.dimensions.height; i++) {
      ctx.moveTo(i * this.context.cell.size.width, 0);
      ctx.lineTo(
        i * this.context.cell.size.width,
        this.context.dimensions.height * this.context.cell.size.height
      );
    }

    ctx.stroke();
  }
}
