import { createPlayerCharacter } from "./entities/playerCharacters";
import k from "./kaplayContext";

k.scene("playground", () => {
  k.add([k.rect(k.width(), k.height()), k.color(0, 0, 0)]);
  const player = createPlayerCharacter(k.center(), "Zioraan");
  player.setControls();
});

k.go("playground");
