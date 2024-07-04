import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <>
      <p>Search by name: </p>
      <input value={filter} onChange={handleOnChange} />
    </>
  );
};

export default SearchBox;
