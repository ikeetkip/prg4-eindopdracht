import { ImageSource, Sound, Resource, Loader } from "excalibur";
import bgImage from "./bg.png";
import MarioImage from "./mario.png";
import BowserImage from "./bowser.png";

const Resources = {
  bg: new ImageSource(bgImage),
  Mario: new ImageSource(MarioImage),
  Bowser: new ImageSource(BowserImage),
};
const ResourceLoader = new Loader([
  Resources.bg,
  Resources.Mario,
  Resources.Bowser,
]);

export { Resources, ResourceLoader };
