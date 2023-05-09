import '../css/style.css'
import fishImage from '../images/fish.png'
import { Game } from './game'

const div = document.createElement("div")
div.classList.add("fish")
document.body.appendChild(div)

const img = document.createElement("img")
img.src = fishImage
div.appendChild(img)
