import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImage from "../images/bg.png";
import PlayerImage from "../images/player_idle.png";
import EnemyImage from "../images/zombie_hurt.png";

const Resources = {
  bg: new ImageSource(bgImage),
  Player: new ImageSource(PlayerImage),
  Enemy: new ImageSource(EnemyImage),
};
const ResourceLoader = new Loader([
  Resources.bg,
  Resources.Player,
  Resources.Enemy,
]);

export { Resources, ResourceLoader };
