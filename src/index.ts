import * as Phaser from "phaser";
import { Game } from "./game";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: "content",
  width: 512,
  height: 512,
  backgroundColor: "#353535",
  scene: [],
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 500 },
    },
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "content",
    width: 320,
    height: 480,
  },
};

new Game(config);
