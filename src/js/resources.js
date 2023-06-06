import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import terrainImage from '../images/bg.png'
import player_idle from '../images/mario.png'
import playerProjectile from '../images/RedProjectile.png'
import enemyProjectile from '../images/jackblack.png'
import healthbars from '../images/HealthBarSpriteSheet.png'
import retrybutton from '../images/mariodead.png'
import startbutton from '../images/startbutton.png'


const Resources = {
    Terrain: new ImageSource(terrainImage),
    Player: new ImageSource(player_idle),
    PlayerProjectile: new ImageSource(playerProjectile),
    EnemyProjectile: new ImageSource(enemyProjectile),
    HealthBars: new ImageSource(healthbars),
    RetryButton : new ImageSource(retrybutton),
    Startbutton : new ImageSource(startbutton)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }

