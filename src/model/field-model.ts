interface IFieldApplyParams {
  points: IPoint[];
  value: IFieldMap;
}

export class FieldModel {
  private field: IFieldMap[][];

  constructor(private readonly context: IComponentContext) {
    const {
      field: { size }
    } = this.context;

    this.field = Array.from({ length: size.height }, () =>
      Array.from({ length: size.width }, () => null)
    );
  }

  public applyToField({ points, value }: IFieldApplyParams) {
    points.forEach(point => {
      const row = this.field[point.y];

      if (row) {
        row[point.x] = value;
      }
    });
  }

  public removeMatches(): number {
    const { width, height } = this.context.field.size;
    let matches = 0;

    for (let i = height - 1; i >= 0; i--) {
      for (let j = 0; j < width; j++) {
        if (!this.field[i][j]) break;

        if (j === width - 1) {
          this.removeRow(i);
          matches++;
          i++;
        }
      }
    }

    return matches;
  }

  public getField() {
    return this.field;
  }

  private removeRow(yPosition: number) {
    const { size } = this.context.field;

    for (let i = yPosition; i >= 0; i--) {
      for (let j = 0; j < size.width; j++) {
        const prev = this.field[i - 1];
        this.field[i][j] = prev ? prev[j] : null;
      }
    }
  }
}
