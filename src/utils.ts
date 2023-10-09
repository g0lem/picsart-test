import { canvasElementId, colorDisplayElementId } from "./constants";

export const getCanvasHTMLElement = () => <HTMLElement>document.getElementById(canvasElementId)!;

export const getColorDisplayHTMLElement = () => <HTMLElement>document.getElementById(colorDisplayElementId)!;

export const getCanvas = () => <HTMLCanvasElement>document.getElementById(canvasElementId)!

export const getContext = () => getCanvas().getContext('2d')!

export const resizeCanvasToFitImage  = (imageBitmap : ImageBitmap) => {
    const canvasElement = getCanvas();

    const {
        width,
        height,
    } = imageBitmap;

    canvasElement.width = width;
    canvasElement.height = height;

}