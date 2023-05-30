import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import terrainImage from '../images/bg.png'
import player_idle from '../images/mario.png'
import playerProjectile from '../images/fireball.png'
import enemyProjectile from '../images/bowser.png'
import healthbars from '../images/HealthBarSpriteSheet.png'
import retrybutton from '../images/retrybutton.png'

const Resources = {
    Terrain: new ImageSource(terrainImage),
    Player: new ImageSource(player_idle),
    PlayerProjectile: new ImageSource(playerProjectile),
    EnemyProjectile: new ImageSource(enemyProjectile),
    HealthBars: new ImageSource(healthbars),
    RetryButton : new ImageSource(retrybutton)
}
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }