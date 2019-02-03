import EventEmitter from "eventemitter3";
import isMobile from "ismobilejs";

export class UserEvents {
  public events: any;

  constructor() {
    this.events = new EventEmitter();

    if (isMobile.any) {
      this.initMobileControls();
    } else {
      this.initDesktopControls();
    }
  }

  private initMobileControls() {
    const controls = [
      {
        event: "enter",
        className: "mobile-rotate",
        content: "&#10807"
      },
      {
        event: "left",
        className: "mobile-left",
        content: "&#8592"
      },
      {
        event: "right",
        className: "mobile-right",
        content: "&#8594"
      }
    ];

    controls.forEach(control => {
      const $el = document.createElement("div");
      $el.innerHTML = control.content;
      $el.classList.add(control.className);
      $el.addEventListener("touchstart", () => this.events.emit(control.event));
      document.body.appendChild($el);
    });
  }

  private initDesktopControls() {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 13) {
        this.events.emit("enter");
      }

      if (e.keyCode === 37) {
        this.events.emit("left");
      }

      if (e.keyCode === 39) {
        this.events.emit("right");
      }
    });
  }
}
