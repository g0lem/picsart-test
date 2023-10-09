import { canvasElementId } from './common/constants'
import { bindCopyColor, bindEventListener } from './events/eventListener';
import { renderCanvas, renderFromBlob } from './render/renderCanvas'
import { uploadImageHandler } from './render/uploadImageHandler';
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="colorDisplay"> 
    <div>
      <h3>Instructions</h3>
      <p>Click the dropper icon, then click anywhere on the canvas to open the color picking modal.</p>
      <p>
        The modal will close if you release the mouse, so while still clicking, 
        you can hover over the zoomed in pixels to select your color.
      </p>
      <p>The color will automatically be copied to your clipboard</p>
      <p>You can upload your own photo as well using the Upload button</p>
      
    </div>
    <div>
      Currrent color:
      <div id="colorDisplayText">
        No Color Picked 
      </div>
      <button id="copyColorButton">Copy Color</button>
    </div>
    <div>
      <input type="file" id="customImage" name="filename" accept=".jpg, .jpeg, .png"/>
    </div>
  </div>
  <div id="colorPickerModal"> </div>
  <div class="canvasContainer" title="Click and Hover to copy the color">
    <canvas id="${canvasElementId}"/>
  </div>
`
bindCopyColor();
uploadImageHandler();
renderCanvas();

bindEventListener();