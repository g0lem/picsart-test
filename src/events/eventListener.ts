import { getCanvasHTMLElement} from "../common/utils"
import { listenForClick, listenForRelease } from "./click";


export const bindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();

    canvasElement.addEventListener('mousedown', listenForClick);
    document.body.addEventListener('mouseup', listenForRelease);
}