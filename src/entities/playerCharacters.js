import { DIAGONAL_FACTOR } from "../constants";
import k from "./kaplayContext";

export function createPlayerCharacter(pos, name) {
  const playerStats = {};

  return k.add([
    k.rect(64, 64),
    k.anchor("center"),
    k.area(),
    k.body(),
    k.pos(pos),
    "player",
    {
      name,
      stats: playerStats,
      speed: 400,
      setControls() {
        const directionalVector = k.vec2(0, 0);
        if (k.isButtonDown("left")) directionalVector.x -= 1;
        if (k.isButtonDown("right")) directionalVector.x += 1;
        if (k.isButtonDown("up")) directionalVector.y -= 1;
        if (k.isButtonDown("down")) directionalVector.y += 1;

        if (directionalVector.x && directionalVector.y) {
          this.move(directionalVector.scale(DIAGONAL_FACTOR * this.speed));
          return;
        }

        this.move(directionalVector.scale(this.speed));
      },
    },
  ]);
}
