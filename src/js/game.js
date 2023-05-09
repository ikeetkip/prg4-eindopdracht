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


    //Player
    const Player = new Actor({

    });
    Player.graphics.use(Resources.Player.toSprite());
    Player.pos = new Vector(50, 380);
   
    //Add Player
    this.add(Player);

  
    //Enemy
    const Enemy = new Actor({
      width: Resources.Enemy.width,
      height: Resources.Enemy.height,
    });
    Enemy.graphics.use(Resources.Enemy.toSprite());
    Enemy.pos = new Vector(300, 380);


  
    // Add Enemy
    this.add(Enemy);

    
  }
}

new Game();
