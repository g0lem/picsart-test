import { zoomInPixels } from "./constants";
import { getCanvasHTMLElement, getColorDisplayHTMLElement, getContext } from "./utils"


export const getImageData = (x: number, y: number, nx : number, ny : number) => {
    const canvasContext = getContext();
    const imageData = canvasContext.getImageData(x,y,nx,ny).data;

    return imageData;
} 

export const getImageDataFromCoords = (x: number, y: number) => {
    const imageData = getImageData(x,y,1,1);
    return imageData;
}

export const adjustCoord = (x: number) => x - (zoomInPixels/2) > 0 ? x : 0;

export const getImageDataForDisplay = (x: number, y: number) => {
    const newX = adjustCoord(x);
    const newY = adjustCoord(y);

    const imageData = getImageData(newX, newY, zoomInPixels, zoomInPixels);
    return imageData;
}

export const rgbToHex = (...array : Array<number>) => {
    const [
        r,
        g,
        b
    ] = array;
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

export const convertImageDataToHexCode = (imageData : Uint8ClampedArray) => {

    const convertedArray : Array<number> = [...imageData];

    return "#" + ("000000" + rgbToHex(...convertedArray)).slice(-6);

}

export const changeColorDisplay = (hexCode : string) => {
    const colorElement = getColorDisplayHTMLElement();

    colorElement.innerText = hexCode;

    colorElement.style.color = hexCode;
}


export const generatePixelMatrix = (array : Uint8ClampedArray) => {
    const regularArray = [...array];

    return regularArray.reduce((matrix : Array<any> , elm) => {

        if(!matrix.length) {
            return [[elm]];
        }

        const lastMatrixMember = matrix.pop();

        if(lastMatrixMember.length < 4) {
            lastMatrixMember.push(elm);
            return [
                ...matrix,
                lastMatrixMember,
            ];
        } 
        else {
            return [
                ...matrix,
                lastMatrixMember,
                [
                    elm,
                ]
            ]
        }
    }, [])

}

export const listenForClick = (mouseEvent: MouseEvent) => {
    const {
        x,
        y
    } = mouseEvent;

    const imageData = getImageDataFromCoords(x,y);
    const hexCode = convertImageDataToHexCode(imageData);

    changeColorDisplay(hexCode);

    const imageDataForDisplay = getImageDataForDisplay(x,y);

    const pixelMatrix = generatePixelMatrix(imageDataForDisplay);

    console.log(pixelMatrix);
}


export const bindEventListener = () => {
    const canvasElement = getCanvasHTMLElement();
    canvasElement.addEventListener('mousedown', listenForClick);
}