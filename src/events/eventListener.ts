import { copyCurrentColor, getCanvasHTMLElement, getColorPickerButton, getCopyColorButton} from "../common/utils"
import { listenForClick, listenForRelease } from "./click";


export const bindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();

    canvasElement.addEventListener('mousedown', listenForClick);
    document.body.addEventListener('mouseup', listenForRelease);
}

export const unBindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();

    canvasElement.removeEventListener('mousedown', listenForClick);
    document.body.removeEventListener('mouseup', listenForRelease);
}

export const bindCopyColor = () => {
    const copyColorButton = getCopyColorButton();

    copyColorButton.addEventListener('mousedown', copyCurrentColor);
}

export const bindColorPickerButton = () => {
    const colorPickerButton = getColorPickerButton();

    colorPickerButton.addEventListener('mousedown', ()=>{
        bindEventListener();

        const canvasElement = getCanvasHTMLElement();
        canvasElement.classList.add('customCursor');
    });
}
