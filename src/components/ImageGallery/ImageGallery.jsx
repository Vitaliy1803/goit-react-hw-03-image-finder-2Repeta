import ImageGallaryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';



export default function ImageGallary({ images }) {
  return (
    <ul>
      {images.map(image => (
        <ImageGallaryItem
          key={nanoid()}
          smallImgURL={image.webformatURL}
          id={image.id}
        />
      ))}
    </ul>
  );
}
