import { useState } from 'react';
import SearchBar from './components/searchbar/SearchBar';
import ImageGallery from './components/imagegallery/ImageGallery';
import Loader from './components/loader/Loader';
import './App.css'
import LoadMoreBtn from './components/loadmorebtn/LoadMoreBtn';
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (photos) => {
    setPhotos(photos);
    setLoading(false);
  }

    async function fetchImages(searchValue) {
    setLoading(true);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: searchValue,
        client_id: "JYMZ7DTu_ibjwkHlenLjwHgOuyEw8LV26WBWvysNigI",
      },
    });
    console.log(response.data.results);
    return response.data.results;
  }
  

  return (
    <>
    <SearchBar onSubmit={handleSubmit} fetchImages={fetchImages}/>
    <ImageGallery photos={photos}/>
    {loading && <Loader />}
    {photos.length > 0 && <LoadMoreBtn/> }
    </>
  )
}

export default App;
