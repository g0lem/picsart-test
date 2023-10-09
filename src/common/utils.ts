import { canvasElementId, colorCircleElementId, colorDisplayElementId, colorPickerModalElementId, copyColorButtonId } from "./constants";

export const getCanvasHTMLElement = () => <HTMLElement>document.getElementById(canvasElementId)!;

export const getColorDisplayHTMLElement = () => <HTMLElement>document.getElementById(colorDisplayElementId)!;

export const getColorCircleHTMLElement = () => <HTMLElement>document.getElementById(colorCircleElementId)!;


export const getColorPickerModalHTMLElement = () => <HTMLElement>document.getElementById(colorPickerModalElementId)!;

export const getCopyColorButton = () => <HTMLElement>document.getElementById(copyColorButtonId)!;



export const getCanvas = () => <HTMLCanvasElement>document.getElementById(canvasElementId)!

export const getContext = () => getCanvas().getContext('2d')!

export const copyToClipboard = (text: string) => navigator.clipboard.writeText(text);

export const copyCurrentColor = () => {
    const currentColor = getColorDisplayHTMLElement();

    const currentColorText = currentColor.innerText;

    copyToClipboard(currentColorText);
}

export const resizeCanvasToFitImage = (imageBitmap: ImageBitmap) => {
    const canvasElement = getCanvas();

    const {
        width,
        height,
    } = imageBitmap;

    canvasElement.width = width;
    canvasElement.height = height;

}

export const updateTooltipPosition = (left: number, top: number) => {
    const toolTipElement = getColorDisplayHTMLElement();

    toolTipElement.style.left = `${left} px`;
    toolTipElement.style.top = `${top + 200} px`;
}
