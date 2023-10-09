import { rgbStringToHex } from "../common/color";
import { changeColorDisplay } from "../common/image";
import { copyToClipboard } from "../common/utils";

export const listenForHover = (element: HTMLElement) => {
    const rgbCode = element.style.backgroundColor;
    const hexCode = rgbStringToHex(rgbCode);
    copyToClipboard(hexCode);
    changeColorDisplay(hexCode);
}

export const listenForHoverPixel = () => {
    const pixelElements = document.querySelectorAll('.Pixel');

    for(let element of pixelElements) {
        element.addEventListener('mouseover', () => {listenForHover(element as HTMLElement)})
    }
}