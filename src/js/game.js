import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Game extends Engine {
  constructor() {
    super({ width: 640, height: 480 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    //Bg
    const Bg = new Actor({
      width: Resources.bg.width,
      height: Resources.bg.height,
    });
    Bg.graphics.use(Resources.bg.toSprite());
    Bg.scale = new Vector(
      this.canvasWidth / (Bg.width * 1),
      this.canvasHeight / (Bg.height * 1.4)
    );
    Bg.pos = new Vector(150, 150);

    //Add Bg
    this.add(Bg);

    //Mario
    const Mario = new Actor({
      width: Resources.Mario.width,
      height: Resources.Mario.height,
    });
    Mario.graphics.use(Resources.Mario.toSprite());
    Mario.pos = new Vector(150, 150);

    let sc = Math.Random() + 0.4;
    Mario.scale = new Vector(sc, sc);

    //Add Mario
    this.add(Mario);

  
    //Bowser
    const Bowser = new Actor({
      width: Resources.Bowser.width,
      height: Resources.Bowser.height,
    });
    Bowser.graphics.use(Resources.Bowser.toSprite());
    Bowser.pos = new Vector(300, 300);

    let sc2 = Math.Random() + 0.4;
    Mario.scale = new Vector(sc2, sc2);
    // Add Bowser
    this.add(Bowser);
  }
}

new Game();
