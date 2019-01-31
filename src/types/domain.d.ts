interface IDimensions {
  width: number;
  height: number;
}

interface IPoint {
  x: number;
  y: number;
}

interface IComponentParams {
  ctx: CanvasRenderingContext2D;
  dt: number;
}

interface IComponentContext {
  dimensions: IDimensions;
  size: IDimensions;
  cell: {
    size: IDimensions;
  };
}

interface IComponent<IProps> {
  mapProps?: (map: (props: IProps) => IProps) => void;
  update: (params: IComponentParams) => void;
  render: (params: IComponentParams) => void;
}
