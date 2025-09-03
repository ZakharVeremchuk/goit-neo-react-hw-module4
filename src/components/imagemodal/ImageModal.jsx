import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = (photo, onClose) => {
  if (!photo) return null;
  return (
    <Modal
      isOpen={!!photo}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName={css.overlay}
      className={css.modalContent}
    >
      <div style={{ backgroundColor: photo?.color }}>
        <img src={photo?.urls?.regular} alt={photo?.alt_description} />
      </div>
    </Modal>
  );
};

export default ImageModal;
