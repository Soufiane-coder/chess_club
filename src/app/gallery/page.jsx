
import PhotoAlbumComponent from "@/components/photo-album/photo-album.component";
import { getGalleryPhotos } from "../../../lib/firebase";


export const revalidate = 3600
const Page = async () => {
    const galleryPhotos = await getGalleryPhotos();

    return (
        <>
            <PhotoAlbumComponent photos={galleryPhotos} />
        </>
    )
}

export default Page;