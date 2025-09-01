import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit, fetchImages}) => {

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const searchValue = evt.target.elements[0].value;
    if (searchValue === "" || searchValue === undefined) {
      toast("Input value in search bar");
    } else {
      const photos = await fetchImages(evt.target.elements[0].value);
      onSubmit(photos);
    }
  };

  return (
    <header>
      <div>
        <Toaster />
      </div>
      <form onSubmit={handleSubmit}>
        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
