import { PreloadScene } from "../preload-scene";
import { SCENE_NAMES } from "./constants";
import { GameScene } from "./scenes/game-scene";

export class Game extends Phaser.Game {
  public constructor(private _gameConfig: Phaser.Types.Core.GameConfig) {
    super(_gameConfig);

    this._initializeScenes();

    this.scene.start(SCENE_NAMES.preload);
  }

  private _initializeScenes(): void {
    this.scene.add(SCENE_NAMES.preload, new PreloadScene(this._gameConfig));
    this.scene.add(SCENE_NAMES.game, new GameScene(this._gameConfig));
  }
}
