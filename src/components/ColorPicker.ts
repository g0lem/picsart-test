import { colorCircleElementId, zoomInPixels } from "./../common/constants";
import { ColorPickZoomIn } from "./ColorPickZoomIn";

export const ColorPicker = (
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
            ${ColorPickZoomIn(pixelMatrix)}
            </div>
        </div>
    `

}