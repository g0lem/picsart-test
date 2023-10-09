import { zoomInPixels } from "./constants";
import { getColorCircleHTMLElement, getColorDisplayHTMLElement, getContext } from "./utils";

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


export const changeColorDisplay = (hexCode : string) => {
    const colorElement = getColorDisplayHTMLElement();

    const colorCirlce = getColorCircleHTMLElement();


    colorElement.innerText = hexCode;

    colorElement.style.color = hexCode;
    colorCirlce.style.borderColor = hexCode;

    
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