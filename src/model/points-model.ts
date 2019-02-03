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
      this.points += params.count * 10;
    } else {
      this.points += 1;
    }
  }

  public getPoints(): number {
    return this.points;
  }
}
