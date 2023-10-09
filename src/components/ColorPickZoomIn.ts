import { convertImageDataToHexCode } from "../common/color";
import { zoomInPixels } from "../common/constants";
import { Pixel } from "./Pixel";

export const shouldCloseRow = (i : number) => i % zoomInPixels === zoomInPixels - 1 && i !== 0;

export const shouldOpenRow = (i : number, length : number) => i % zoomInPixels === 0 && i < length - 1;

export const ColorPickZoomIn = (pixelMatrix: Array<Uint8ClampedArray>) => {

    let htmlString = ``

    for(let i = 0; i < pixelMatrix.length; i++) {
        const pixelArray = pixelMatrix[i];

        const hexCode = convertImageDataToHexCode(pixelArray);
        
        if(shouldOpenRow(i, pixelMatrix.length)) {
            htmlString+=`<div class="PixelRow">`
        } 

        htmlString += Pixel(hexCode);

        if(shouldCloseRow(i)) {
            htmlString+=`</div>`
        }
    }

    return htmlString;

}
