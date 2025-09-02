import { Toaster } from "react-hot-toast";
import ImageSearch from "../../assets/search.svg"
import css from './SearchBar.module.css'
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <div>
        <Toaster />
      </div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          const value = evt.target.elements[0].value;
          onSubmit(value);
        }}
        className={css.form}
      >
        <input
          className={css.formInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.formButton} type="submit">
          <img className={css.icon} src={ImageSearch} alt="" />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;