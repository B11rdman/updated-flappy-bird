import * as Phaser from "phaser";
import { birdAnimationConfig, CONFIGS } from "../configs";
import { BIRD_SHEET } from "../constants";

export class BirdComponent extends Phaser.Physics.Arcade.Sprite {
  public isAlive = true;

  public constructor(public scene: Phaser.Scene) {
    super(scene, 100, 287, BIRD_SHEET);

    this._initialSetup();
  }

  public update(): void {
    const v = Math.min(Math.max(this.body.velocity.y, -CONFIGS.birdJump), CONFIGS.birdJump);
    this.rotation = (Math.PI * v) / (6 * 180);
  }

  public resetPosition(): void {
    this.setPosition(100, 287);
    this.rotation = 0;
    this.isAlive = true;
    this.play({ key: "fly", repeat: -1 });
  }

  public jump(): void {
    this.rotation = -Math.PI / 4;
    this.body.velocity.y = -CONFIGS.birdJump;
  }

  public die(): void {
    this.isAlive = false;
    this.rotation = Math.PI / 4;

    this.stop();
  }

  public disablePhysics(): void {
    this.scene.physics.world.disable(this);
  }

  public enablePhysics(): void {
    this.scene.physics.world.enable(this);
  }

  private _initialSetup(): void {
    this.anims.create(birdAnimationConfig);
    this.play({ key: "fly", repeat: -1 });
  }
}
