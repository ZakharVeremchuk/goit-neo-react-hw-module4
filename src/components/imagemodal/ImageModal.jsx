import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({isOpen, photo, onClose}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.modal}
    >
    <div>
      {photo && (
        <div className={css.photoContainer}>
          <img className={css.photo} src={photo.urls.regular} alt={photo.description} />
        </div>
      )}

    </div>
    </Modal>
  );
};

export default ImageModal;
