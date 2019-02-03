interface IAddMatchPoints {
  type: "match";
  count: number;
}

interface IAddNextPoints {
  type: "next";
}

export class PointsModel {
  private points = 0;

  public add(params: IAddNextPoints | IAddMatchPoints) {
    if (params.type === "match") {
      const values = Array.from(
        { length: params.count },
        (_, idx) => (idx + 1) * 10
      );

      this.points += values.reduce((acc, curr) => acc + curr, 0);
    } else {
      this.points += 1;
    }
  }

  public getPoints(): number {
    return this.points;
  }
}
