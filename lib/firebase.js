// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwyKojY6dnPl6fJDlwHW0Fv0VtKU9uS74",
    authDomain: "chess-club-ed9ad.firebaseapp.com",
    projectId: "chess-club-ed9ad",
    storageBucket: "chess-club-ed9ad.appspot.com",
    messagingSenderId: "672204296826",
    appId: "1:672204296826:web:5d820cec3b59d4637d61c3",
    measurementId: "G-J4DMM4RV5N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const storage = getStorage();

// Create a reference under which you want to list

export const getGalleryPhotos = async () => {
    try {
        const listRef = ref(storage, 'gallery');
        const res = await listAll(listRef);
        const localURLs = res.items.map(itemRef => itemRef.fullPath)

        return await Promise.all(localURLs.map(async (localURL) => {
            const imageRef = ref(storage, localURL)
            const url = await getDownloadURL(imageRef)

            const pattern = /\[(\d+)&(\d+)\]/;
            const match = pattern.exec(localURL)

            const width = match[1];
            const height = match[2];
            return { src: url, height, width }
        }))
    }
    catch (error) {
        console.error(error);
        return []
    }
}

