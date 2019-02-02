interface IDimensions {
  width: number;
  height: number;
}

interface IPoint {
  x: number;
  y: number;
}

interface IDeltaPoint {
  x?: number;
  y?: number;
}

type IFieldMap = number | null;

interface IFigure {
  position: IPoint;
  field: IFieldMap[][];
}

interface IComponentParams {
  ctx: CanvasRenderingContext2D;
  dt: number;
}

interface IComponentContext {
  theme: {
    cellColor: string;
    fieldColor: string;
  };
  dimensions: IDimensions;
  size: IDimensions;
  cell: {
    size: IDimensions;
  };
}

interface IComponent<IProps> {
  update: (params: IComponentParams) => void;
  render: (params: IComponentParams) => void;
}
