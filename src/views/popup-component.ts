import * as Phaser from "phaser";
import { TEXTURES } from "../constants";

export class PopupComponent extends Phaser.GameObjects.Container {
  private _bg: Phaser.GameObjects.Image;
  private _gameOver: Phaser.GameObjects.Image;
  private _playerScoreText: Phaser.GameObjects.Text;
  private _bestScoreText: Phaser.GameObjects.Text;
  private _proposal: Phaser.GameObjects.Text;
  public constructor(public scene: Phaser.Scene, private _score: number, private _bestScore: number) {
    super(scene);

    this._build();
  }

  public destroy(): void {
    this.scene.tweens.killTweensOf(this._proposal);
    this._bg.destroy();
    this._gameOver.destroy();
    this._playerScoreText.destroy();
    this._bestScoreText.destroy();
    this._proposal.destroy();

    super.destroy();
  }

  private _build(): void {
    const { width: w, height: h } = this.scene.game.config;
    this._bg = this.scene.add.image(+w / 2, +h / 2, TEXTURES, "popup.png");
    this._gameOver = this.scene.add.image(+w / 2, +h / 2 - 42, TEXTURES, "gameover.png");
    this._playerScoreText = this.scene.add.text(+w / 2, +h / 2, `You scored - ${this._score}`);
    this._bestScoreText = this.scene.add.text(
      +w / 2,
      +h / 2 + 21,
      `Best score - ${Math.max(this._score, this._bestScore)}`
    );
    this._proposal = this.scene.add.text(+w / 2, +h / 2 + 52, `TAP TO PLAY AGAIN`, { fontSize: "20px" });

    this._playerScoreText.setOrigin(0.5);
    this._bestScoreText.setOrigin(0.5);
    this._proposal.setOrigin(0.5);

    this.scene.tweens.add({
      targets: this._proposal,
      alpha: 0,
      duration: 700,
      ease: "SineInOut",
      yoyo: true,
      repeat: -1,
    });
  }
}
