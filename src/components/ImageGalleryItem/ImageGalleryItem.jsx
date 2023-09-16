import { ImageGalleryItemImg, ImageGalleryItemLi } from "./ImageGalleryItem.styled";
import PropTypes from 'prop-types';

export default function ImageGallaryItem({ smallImgURL, id }) {
  return (
    <ImageGalleryItemLi>
      <ImageGalleryItemImg src={smallImgURL} alt={id} />
    </ImageGalleryItemLi>
  );
}

ImageGallaryItem.propTypes = {
  id: PropTypes.number.isRequired,
  smallImgURL: PropTypes.string.isRequired,
};