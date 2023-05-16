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

    //TODO make it that the background keeps looping 
    Bg.scale = new Vector(
    
      this.canvasWidth / (Bg.width * 1),
      this.canvasHeight / (Bg.height * 1.4)
    );
    Bg.pos = new Vector(150, 150);

    for (let i = 0; i < this.canvasWidth.length; i++) {
      for (let j = 0; j < this.canvasHeight.length; j++) {
        
      }
      
    }  
  
    //Add Bg
    this.add(Bg);

    

    //Player
    const Player = new Actor()
    Player.graphics.use(Resources.Player.toSprite());
    Player.pos = new Vector(50, 380);
    //Add Player
    this.add(Player);

  
  }
}

new Game();
