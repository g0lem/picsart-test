import { colorCircleElementId, zoomInPixels } from "./constants"
import { convertImageDataToHexCode } from "./utils";

export const shouldCloseRow = (i : number) => i % zoomInPixels === zoomInPixels - 1 && i !== 0;

export const shouldOpenRow = (i : number, length : number) => i % zoomInPixels === 0 && i < length - 1;

export const PixelComponent = (hexCode : string) => `<div class="Pixel" style="background-color: ${hexCode}"></div>`

export const generateHTMLFromPixelMatrix = (pixelMatrix: Array<Uint8ClampedArray>) => {

    let htmlString = ``

    for(let i = 0; i < pixelMatrix.length; i++) {
        const pixelArray = pixelMatrix[i];

        const hexCode = convertImageDataToHexCode(pixelArray);
        
        if(shouldOpenRow(i, pixelMatrix.length)) {
            htmlString+=`<div class="PixelRow">`
        } 

        htmlString += PixelComponent(hexCode);

        if(shouldCloseRow(i)) {
            htmlString+=`</div>`
        }
    }

    return htmlString;

}


export const ColorPickDisplayTemplate = (
    pixelMatrix: Array<Uint8ClampedArray>, 
    left: number, 
    top: number
) => {

    const totalSize = zoomInPixels*10;

    return `
        <div id="${colorCircleElementId}" style="position:fixed; 
            top: ${top - totalSize/2}px; 
            left: ${left - totalSize/2}px; 
            z-index: 100; 
            border-radius: ${totalSize}px; 
            border-width: 20px;
            border-style: solid;
            overflow: hidden;">
            <div 
                style="border-radius: ${totalSize}px; 
                border-width: 30px;
                overflow: hidden;
                margin: 0px;"
            >
            ${generateHTMLFromPixelMatrix(pixelMatrix)}
            </div>
        </div>
    `

}