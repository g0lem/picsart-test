import { copyCurrentColor, getCanvasHTMLElement, getCopyColorButton} from "../common/utils"
import { listenForClick, listenForRelease } from "./click";


export const bindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();

    canvasElement.addEventListener('mousedown', listenForClick);
    document.body.addEventListener('mouseup', listenForRelease);
}

export const bindCopyColor = () => {
    const copyColorButton = getCopyColorButton();

    copyColorButton.addEventListener('mousedown', copyCurrentColor);
}