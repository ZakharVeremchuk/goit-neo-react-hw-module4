import ImageCard from "../imagecard/ImageCard";

const ImageGallery = ({ photos }) => {
  return (
    <ul>
      {photos.length > 0 &&
        photos.map((photo) => (
          <li key={photo.id}>
            <ImageCard photo={photo}/>
          </li>
        ))}
    </ul>
  );
};

export default ImageGallery;
