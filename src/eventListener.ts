import { ColorPickDisplayTemplate } from "./ColorPickDisplayTemplate";
import { changeColorDisplay, generatePixelMatrix, getImageDataForDisplay, getImageDataFromCoords } from "./image";
import { convertImageDataToHexCode, getCanvasHTMLElement, getColorPickerModalHTMLElement, rgbStringToHex } from "./utils"




export const listenForClick = (mouseEvent: MouseEvent) => {
    const {
        x,
        y
    } = mouseEvent;

    const imageData = getImageDataFromCoords(x,y);
    const hexCode = convertImageDataToHexCode(imageData);


    const imageDataForDisplay = getImageDataForDisplay(x,y);

    const pixelMatrix = generatePixelMatrix(imageDataForDisplay);

    const colorPickerModalElement = getColorPickerModalHTMLElement();

    const colorPickerModalHtml = ColorPickDisplayTemplate(pixelMatrix, x,y);

    colorPickerModalElement.innerHTML = colorPickerModalHtml;


    changeColorDisplay(hexCode);
    listenForHoverPixel();
}


export const listenForRelease = () => {
    
    const colorPickerModalElement = getColorPickerModalHTMLElement();
    colorPickerModalElement.innerHTML = '';
}

export const listenForHover = (element: HTMLElement) => {
    const rgbCode = element.style.backgroundColor;
    const hexCode = rgbStringToHex(rgbCode);
    changeColorDisplay(hexCode);
}

export const listenForHoverPixel = () => {
    const pixelElements = document.querySelectorAll('.Pixel');

    for(let element of pixelElements) {
        element.addEventListener('mouseover', () => {listenForHover(element as HTMLElement)})
    }
}



export const bindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();

    canvasElement.addEventListener('mousedown', listenForClick);
    // document.body.addEventListener('mouseup', listenForRelease);
}