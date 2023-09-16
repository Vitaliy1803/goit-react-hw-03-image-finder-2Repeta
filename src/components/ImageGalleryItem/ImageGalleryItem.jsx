export default function ImageGallaryItem({ smallImgURL, id }) {
  return (
    <li>
      <img src={smallImgURL} alt={id} />
    </li>
  );
}
