import { imagePath } from "./constants";
import { getContext, resizeCanvasToFitImage } from "./utils";


export const fetchImage  = async () : Promise<Blob> => {
    try {
        const beachResponse = await fetch(imagePath);
        const beachImageBlob = await beachResponse.blob();
        return beachImageBlob;
    }
    catch(e) {
        throw new Error('Could not load image');
    }
}


export const generateImageBitmap = async (imageBlob : Blob) => {
    const imageBitmap = await createImageBitmap(imageBlob);

    return imageBitmap;
}

export const renderCanvas =  async () => {

    const canvasContext = getContext();

    const blobImage = await fetchImage();
    const imageBitmap = await generateImageBitmap(blobImage);
    resizeCanvasToFitImage(imageBitmap);

    canvasContext.drawImage(imageBitmap, 0, 0);

}