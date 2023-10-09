import { canvasElementId, colorCircleElementId, colorDisplayElementId, colorPickerModalElementId } from "./constants";

export const getCanvasHTMLElement = () => <HTMLElement>document.getElementById(canvasElementId)!;

export const getColorDisplayHTMLElement = () => <HTMLElement>document.getElementById(colorDisplayElementId)!;

export const getColorCircleHTMLElement = () => <HTMLElement>document.getElementById(colorCircleElementId)!;


export const getColorPickerModalHTMLElement = () => <HTMLElement>document.getElementById(colorPickerModalElementId)!;


export const getCanvas = () => <HTMLCanvasElement>document.getElementById(canvasElementId)!

export const getContext = () => getCanvas().getContext('2d')!

export const resizeCanvasToFitImage = (imageBitmap: ImageBitmap) => {
    const canvasElement = getCanvas();

    const {
        width,
        height,
    } = imageBitmap;

    canvasElement.width = width;
    canvasElement.height = height;

}


export const rgbToHex = (...array: Array<number>) => {
    const [
        r,
        g,
        b
    ] = array;
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

export const convertImageDataToHexCode = (imageData: Uint8ClampedArray) => {

    const convertedArray: Array<number> = [...imageData];

    return "#" + ("000000" + rgbToHex(...convertedArray)).slice(-6);

}


export const componentFromStr = (numStr: string, percent : string) => {
    const num = Math.max(0, parseInt(numStr, 10));
    return percent ?
        Math.floor(255 * Math.min(100, num) / 100) : Math.min(255, num);
}

export const rgbStringToHex = (rgb : string) => {
    var rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/;
    var result, r, g, b, hex = "";
    if ( (result = rgbRegex.exec(rgb)) ) {
        r = componentFromStr(result[1], result[2]);
        g = componentFromStr(result[3], result[4]);
        b = componentFromStr(result[5], result[6]);
    
        hex = "#" + (0x1000000 + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    return hex;
}