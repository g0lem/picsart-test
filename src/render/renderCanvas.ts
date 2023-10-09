import { imagePath } from "../common/constants";
import { getContext, resizeCanvasToFitImage } from "../common/utils";


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

export const renderFromBlob = async (blobImage: Blob) => {
    const canvasContext = getContext();
    const imageBitmap = await generateImageBitmap(blobImage);
    resizeCanvasToFitImage(imageBitmap);

    canvasContext.drawImage(imageBitmap, 0, 0);
}

export const renderCanvas =  async () => {
    const blobImage = await fetchImage();
    
    renderFromBlob(blobImage);
}