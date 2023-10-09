import { canvasElementId } from './constants'
import { bindEventListener } from './eventListener';
import { renderCanvas } from './renderCanvas'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="colorDisplay"> No Color Picked </div>
  <div class="canvasContainer">
    <canvas id="${canvasElementId}"/>
  </div>
`

renderCanvas();

bindEventListener();