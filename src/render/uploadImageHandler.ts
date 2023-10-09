import { renderFromBlob } from "./renderCanvas";


export const uploadImageHandler = () => {
    const file = document.getElementById('customImage') as any;

    file.addEventListener('change', ()=>{
        const myImage = file.files[0];
        console.log(myImage);
        renderFromBlob(myImage);
    })
}