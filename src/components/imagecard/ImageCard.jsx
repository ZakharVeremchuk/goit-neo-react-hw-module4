import css from './ImageCard.module.css';

const ImageCard = ({ photo, onOpen }) => {
  return (
    <div className={css.imageContainer}>
      <img
        className={css.card}
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => onOpen(photo)}
      />
    </div>
  );
};

export default ImageCard;
