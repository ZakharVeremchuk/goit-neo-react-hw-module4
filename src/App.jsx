import { useState } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import ImageGallery from "./components/imagegallery/ImageGallery";
import Loader from "./components/loader/Loader";
import ImageModal from "./components/imagemodal/ImageModal";
import "./App.css";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import axios from "axios";
import ErrorMessage from "./components/errormessage/Errormessage";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);

  async function fetchImages(searchValue, page = 1) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchValue,
        page,
        client_id: "JYMZ7DTu_ibjwkHlenLjwHgOuyEw8LV26WBWvysNigI",
      },
    });
    return response.data.results;
  }

  const handleSubmit = async (value) => {
    setSearchValue(value);
    setPage(1);
    setError(false);
    setLoading(true);
    let results = [];
    try {
      results = await fetchImages(value, 1);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
    setPhotos(results);
  };

  const handleMore = async () => {
    const nextPage = page + 1;
    const results = await fetchImages(searchValue, nextPage);
    setPhotos((prev) => [...prev, ...results]);
    setPage(nextPage);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery photos={photos} openModal={openModal} />
      {selectedImage && (
        <ImageModal
          isOpen={modalOpen}
          photo={selectedImage}
          onClose={closeModal}
        />
      )}
      {photos.length > 0 && <LoadMoreBtn handleClick={handleMore} />}
    </>
  );
}

export default App;
