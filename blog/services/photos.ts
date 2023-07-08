import {storage} from '../libs/firebase'
import {ref, listAll, getDownloadURL, uploadBytes} from 'firebase/storage'
import {v4 as createId} from 'uuid';


export const insert = async (file: File) => {
    if(['image/jpeg', 'image/png', 'image/jpg'].includes(file.type)){

        let randomName = createId();

        let newFile = ref(storage, `images/${randomName}`)

        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref)
        return {
            name:upload.ref.name,
            url:photourl
        } 
    } 
   
}