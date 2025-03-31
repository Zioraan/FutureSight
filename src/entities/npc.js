import k from "../kaplayContext";
import { DIAGONAL_FACTOR } from "../constants";

export function createNPC(pos, name) {
  return k.add([
    k.rect(64, 64),
    k.color(230, 230, 230),
    k.anchor("center"),
    k.area(),
    k.body(),
    k.pos(pos),
    "npc",
    {
      name,
      dialogue: {
        first: {
          text: "Hello there!",
          done: false,
        },
        second: {
          text: "This is my second dialogue!",
          done: false,
        },
        third: {
          text: "This is my repeating dialogue!",
          done: false,
        },
      },
    },
  ]);
}
