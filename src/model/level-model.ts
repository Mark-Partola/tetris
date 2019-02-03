export class LevelModel {
  private level = 1;

  private figures = 0;

  public incFigures(): void {
    this.figures++;

    this.level = Math.ceil(this.figures / 10);
  }

  public getLevel(): number {
    return this.level;
  }
}
