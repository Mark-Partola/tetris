import GameLoop from "@vaalentin/game-loop";
import EventEmitter from "eventemitter3";

export class Loop {
  public readonly events: any;

  private readonly loop: GameLoop;

  constructor(frames: number) {
    this.loop = new GameLoop(frames);

    this.events = new EventEmitter();

    this.init();
  }

  public run() {
    this.loop.start();
  }

  private init() {
    this.loop.on("init", () => this.events.emit("init"));

    this.loop.on("update", (dt: number) => this.events.emit("update", { dt }));

    this.loop.on("render", (dt: number) => this.events.emit("render", { dt }));
  }
}
