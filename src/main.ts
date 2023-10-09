import { canvasElementId } from './constants'
import { bindEventListener } from './eventListener';
import { renderCanvas } from './renderCanvas'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="colorDisplay"> 
    <div id="colorDisplayText">
      No Color Picked 
    </div>
  </div>
  <div id="colorPickerModal"> </div>
  <div class="canvasContainer">
    <canvas id="${canvasElementId}"/>
  </div>
`

renderCanvas();

bindEventListener();