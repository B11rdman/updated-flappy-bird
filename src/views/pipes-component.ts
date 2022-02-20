import * as Phaser from "phaser";
import { TEXTURES } from "../constants";

export class PipesComponent extends Phaser.Physics.Arcade.Group {
  public pipeBottom: Phaser.Physics.Arcade.Sprite;
  public pipeTop: Phaser.Physics.Arcade.Sprite;

  public constructor(public scene: Phaser.Scene, private _x: number) {
    super(scene.physics.world, scene);

    this._setup();
  }

  public destroy(): void {
    this.getPipes().forEach((pipe) => pipe.destroy());
    super.destroy();
  }

  public getPipes(): Phaser.Physics.Arcade.Sprite[] {
    return [this.pipeTop, this.pipeBottom];
  }

  public move(speed: number): void {
    this.pipeTop.x -= speed;
    this.pipeBottom.x -= speed;

    this.pipeTop.x <= -this.pipeTop.width / 2 && this.emit("outOfScreen");
  }

  private _setup(): void {
    const pipe1Y = Math.random() * 150 + 380;
    const pipe1 = this.scene.physics.add.sprite(this._x, pipe1Y, TEXTURES, "pipe-1.png");

    const pipe2Y = pipe1Y - pipe1.height - (Math.random() * 80 + 100);
    const pipe2 = this.scene.physics.add.sprite(this._x, pipe2Y, TEXTURES, "pipe-2.png");

    pipe1.setImmovable(true);
    pipe2.setImmovable(true);

    pipe1.body.allowGravity = false;
    pipe2.body.allowGravity = false;

    this.pipeBottom = pipe1;
    this.pipeTop = pipe2;
  }
}
