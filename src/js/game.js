import { Engine } from 'excalibur'
import { Level } from './scene'
import { GameOver } from './gameover'
import { ResourceLoader } from './resources'
import { startscreen } from './startscreen'


export class Game extends Engine {
    level;
    gameover;

    constructor() {
        super({ width: 1300, height: 600 });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        this.addScene('start', new startscreen());
        this.addScene('level', new Level());
        this.addScene('gameover', new GameOver());

        this.goToScene('start');
    }
}


new Game()