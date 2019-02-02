import { Field } from "./components/field";
import { Cell } from "./components/cell";
import { Points } from "./components/points";
import { GameOver } from "./components/game-over";
import { GameModel } from "./game-model";

export class GameController implements IComponent<null> {
  private game: GameModel;

  private fieldConfig = {
    width: 10,
    height: 20
  };

  private context = {
    theme: {
      cellColor: "#6f7f90",
      fieldColor: "#6f7f90"
    },
    dimensions: this.fieldConfig,
    size: {
      width: this.props.dimensions.width,
      height: this.props.dimensions.height
    },
    cell: {
      size: {
        width: this.props.dimensions.width / this.fieldConfig.width,
        height: this.props.dimensions.height / this.fieldConfig.height
      }
    }
  };

  private components: IComponent<any>[] = [
    new Field({}, this.context),
    new Points({ points: 0 }, this.context)
  ];

  constructor(private readonly props: { dimensions: IDimensions }) {
    this.game = new GameModel(this.context);

    document.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        this.game.rotate();
      }

      if (e.keyCode === 37) {
        this.game.move({ x: -1 });
      }

      if (e.keyCode === 39) {
        this.game.move({ x: 1 });
      }
    });
  }

  public update(params: IComponentParams) {
    const model = this.game.getModel();

    if (model.gameOver) return;

    this.game.move({ y: 1 });
    this.components.forEach(component => {
      if (component instanceof Points) {
        return component.update(params, {
          points: model.points
        });
      }

      component.update(params, {});
    });
  }

  public render(params: IComponentParams) {
    const model = this.game.getModel();

    if (model.gameOver) {
      const gameOver = new GameOver({ points: model.points }, this.context);

      return gameOver.render(params);
    }

    this.renderField(params);
    this.components.forEach(component => component.render(params));
  }

  private renderField(params: IComponentParams) {
    const { field } = this.game.getModel();

    field.forEach((row, rowIdx) => {
      row.forEach((cell, cellIdx) => {
        if (cell) {
          const cell = new Cell(
            {
              position: {
                x: cellIdx,
                y: rowIdx
              }
            },
            this.context
          );

          cell.render(params);
        }
      });
    });
  }
}
