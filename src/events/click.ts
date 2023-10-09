import { convertImageDataToHexCode } from "../common/color";
import { changeColorDisplay, generatePixelMatrix, getImageDataForDisplay, getImageDataFromCoords } from "../common/image";
import { copyToClipboard, getColorPickerModalHTMLElement, updateTooltipPosition } from "../common/utils";
import { ColorPicker } from "../components/ColorPicker";
import { listenForHoverPixel } from "./hover";


export const listenForClick = (mouseEvent: MouseEvent) => {
    const {
        offsetX,
        offsetY,
        x,
        y
    } = mouseEvent;

    const imageData = getImageDataFromCoords(offsetX,offsetY);
    const hexCode = convertImageDataToHexCode(imageData);

    copyToClipboard(hexCode);


    const imageDataForDisplay = getImageDataForDisplay(offsetX,offsetY);

    const pixelMatrix = generatePixelMatrix(imageDataForDisplay);

    const colorPickerModalElement = getColorPickerModalHTMLElement();

    const colorPickerModalHtml = ColorPicker(pixelMatrix, x, y);

    colorPickerModalElement.innerHTML = colorPickerModalHtml;

    changeColorDisplay(hexCode);
    listenForHoverPixel();

    
    updateTooltipPosition(x,y);
}


export const listenForRelease = () => {
    
    const colorPickerModalElement = getColorPickerModalHTMLElement();
    colorPickerModalElement.innerHTML = '';
}