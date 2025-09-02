import ImageCard from "../imagecard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ photos }) => {
  return (
    <ul className={css.imageList}>
      {photos.length > 0 &&
        photos.map((photo) => (
          <li className={css.imageListElement} key={photo.id}>
            <ImageCard photo={photo}/>
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
