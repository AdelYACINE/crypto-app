import { useContext } from "react";
import CryptoContext from "../../context/cryptoContext/CryptoContext";

const FormSearch = () => {
  const { inputSearch, setInputValue } = useContext(CryptoContext);

  return (
    <div>
      <form className="d-flex form">
        <input
          ref={inputSearch}
          className="form-control me-sm-2 input-search"
          type="search"
          placeholder="Search"
          onChange={() => setInputValue(inputSearch.current.value)}
        />
      </form>
    </div>
  );
};

export default FormSearch;
