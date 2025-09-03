import css from './ImageCard.module.css';

const ImageCard = ({ photo }) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.card}
        src={photo.urls.small}
        alt={photo.alt_description || "Unsplash photo"}
      />
    </div>
  );
};

export default ImageCard;
