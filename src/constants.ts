export const SCENE_NAMES = {
  preload: "PreloadScene",
  game: "GameScene",
};

export const TEXTURES = "mainAtlas";
export const BIRD_SHEET = "bird";

export const STORAGE_NAME = "bestFlappyBirdScore";

export enum GameState {
  undefined,
  preAction,
  action,
  die,
  result,
}
