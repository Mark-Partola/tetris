declare module "@vaalentin/game-loop" {
  class GameLoop {
    constructor(frames: number);
    start: () => void;
    on: (event: string, cb: (dt: number) => void) => void;
  }

  export default GameLoop;
}

declare module "eventemitter3";
