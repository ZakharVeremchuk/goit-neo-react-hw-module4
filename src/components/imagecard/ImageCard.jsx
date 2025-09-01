const ImageCard = ({ photo }) => {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.alt_description || "Unsplash photo"}
      />
    </div>
  );
};

export default ImageCard;
