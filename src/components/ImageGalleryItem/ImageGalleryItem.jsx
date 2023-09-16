import { ImageGalleryItemImg, ImageGalleryItemLi } from "./ImageGalleryItem.styled";

export default function ImageGallaryItem({ smallImgURL, id }) {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={smallImgURL} alt={id} />
    </ImageGalleryItemLi>
  );
}
