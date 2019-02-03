import { Field } from "./components/field";
import { Cell } from "./components/cell";
import { Stats } from "./components/stats";
import { GameOver } from "./components/game-over";
import { NextFigure } from "./components/next-figure";
import { GameModel } from "./model/game-model";
import { UserEvents } from "./user-events";

export class GameController implements IComponent<IComponentContext> {
  private game = new GameModel(this.props);

  private userEvents = new UserEvents();

  private field = new Field({}, this.props);

  private stats = new Stats({ points: 0, level: 0 }, this.props);

  private nextFigure = new NextFigure({ figure: [] }, this.props);

  private timeDelta = 0;

  constructor(private readonly props: IComponentContext) {
    this.userEvents.events.on("enter", () => this.game.rotate());
    this.userEvents.events.on("left", () => this.game.move({ x: -1 }));
    this.userEvents.events.on("right", () => this.game.move({ x: 1 }));
    this.userEvents.events.on("down", () => this.game.move({ y: 1 }));
  }

  public update(params: IComponentParams) {
    const model = this.game.getModel();

    this.timeDelta += params.dt;

    if (this.timeDelta < 400 / Math.log1p(model.level)) {
      return;
    } else {
      this.timeDelta = 0;
    }

    if (model.gameOver) return;

    this.game.move({ y: 1 });

    this.stats.update(params, {
      points: model.points,
      level: model.level
    });

    this.nextFigure.update(params, {
      figure: model.nextFigure
    });
  }

  public render(params: IComponentParams) {
    const model = this.game.getModel();

    if (model.gameOver) {
      const gameOver = new GameOver({ points: model.points }, this.props);

      return gameOver.render(params);
    }

    this.renderField(params);
    this.field.render(params);
    this.stats.render(params);
    this.nextFigure.render(params);
  }

  private renderField(params: IComponentParams) {
    const { field } = this.game.getModel();

    field.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (!cell) return;

        const component = new Cell({ position: { x, y } }, this.props);
        component.render(params);
      });
    });
  }
}
