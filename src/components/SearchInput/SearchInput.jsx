import { useDispatch } from "react-redux";
import { updateFilter } from "../../redux/usersSlice";

const SearchInput = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <input type="text" placeholder="Search users..." onChange={handleChange} />
  );
};

export default SearchInput;
