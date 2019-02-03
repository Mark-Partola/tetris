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
  canvas: {
    size: IDimensions;
  };
  field: {
    size: IDimensions;
    color: string;
  };
  cell: {
    size: IDimensions;
    color: string;
  };
}

interface IComponent<IProps> {
  update: (params: IComponentParams, updateParams: IProps) => void;
  render: (params: IComponentParams) => void;
}
