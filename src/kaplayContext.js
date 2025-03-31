import kaplay from "kaplay";

const k = kaplay({
  width: 1920,
  height: 1080,
  letterbox: true,
  global: false,
  debug: true,
  debugKey: "f2",
  buttons: {
    cancel: {
      keyboard: ["c", "backspace"],
      mouse: ["right-click"],
    },
    confirm: {
      keyboard: ["space"],
      mouse: ["left-click"],
    },
    left: {
      keyboard: ["a", "ArrowLeft"],
    },
    right: {
      keyboard: ["d", "ArrowRight"],
    },
    up: {
      keyboard: ["w", "ArrowUp"],
    },
    down: {
      keyboard: ["s", "ArrowDown"],
    },
    openMenu: {
      keyboard: ["tab"],
    },
    openStart: {
      keyboard: ["escape"],
    },
  },
});

export default k;
