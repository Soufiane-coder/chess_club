"use client";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "@/components/next-js-image/next-js-image.components";

const PhotoAlbumComponent = ({ photos }) => {

    return (<PhotoAlbum
        layout="rows"
        photos={photos}
        renderPhoto={NextJsImage}
        defaultContainerWidth={1200}
        rowConstraints={(screenSize) => {
            if (screenSize < 500) return { minPhotos: 1, maxPhotos: 2 }
            return { minPhotos: 1, maxPhotos: 3 }
        }}
        sizes={{
            size: "calc(100vw - 40px)",
            sizes: [
                { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
            ],
        }}
    />)
}
export default PhotoAlbumComponent