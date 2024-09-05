import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/usersSlice";

import css from "./SearchInput.module.css";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input
      className={css.searchInputItem}
      type="text"
      placeholder="Search users..."
      onChange={handleChange}
    />
  );
};

export default SearchInput;
