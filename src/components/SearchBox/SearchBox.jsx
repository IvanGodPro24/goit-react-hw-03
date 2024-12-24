import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  const searchId = useId();

  return (
    <div className={css.filter}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        type="text"
        name="filter"
        id={searchId}
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
