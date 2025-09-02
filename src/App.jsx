import { useState, useRef } from "react";
import SearchBar from "./components/searchbar/SearchBar";
import ImageGallery from "./components/imagegallery/ImageGallery";
import Loader from "./components/loader/Loader";
import "./App.css";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  async function fetchImages(searchValue, page = 1) {
    setLoading(true);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchValue,
        page,
        client_id: "JYMZ7DTu_ibjwkHlenLjwHgOuyEw8LV26WBWvysNigI",
      },
    });
    setLoading(false)
    return response.data.results;
  }

  const handleSubmit = async (value) => {
    setSearchValue(value);
    setPage(1);
    const results = await fetchImages(value, 1)
    setPhotos(results);
  };

  const handleMore = async () => {
    const nextPage = page + 1;
    const results = await fetchImages(searchValue, nextPage);
    setPhotos((prev) => [...prev, ...results]);
    setPage(nextPage);
  }

  return (
    <>
        <SearchBar
          onSubmit={handleSubmit}
        />
      <ImageGallery photos={photos} />
      {loading && <Loader />}
      {photos.length > 0 && (
        <LoadMoreBtn handleClick={handleMore} />
      )}
    </>
  );
}

export default App;
