import * as Phaser from "phaser";
import { BIRD_SHEET } from "./constants";

export const CONFIGS: {
  speed: number;
  birdGravity: number;
  birdJump: number;
} = {
  speed: 2,
  birdGravity: 800,
  birdJump: 300,
};

export const getBirdAnimationConfig = (): Phaser.Types.Animations.Animation => {
  return {
    key: "fly",
    frames: BIRD_SHEET,
    frameRate: 12,
    repeat: -1,
  };
};
