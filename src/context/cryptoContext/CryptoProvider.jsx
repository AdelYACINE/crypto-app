import CryptoContext from "./CryptoContext";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

const CryptoProvider = ({ children }) => {
  const url = "https://api.coinstats.app/public/v1/coins?skip=0";

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [listCoins, setListCoins] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const inputSearch = useRef();

  const getData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      console.log(res.data.coins);
      setListCoins(res.data.coins);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  //////////pagination//////////////////////////////////////////////////////////////////////////////////////////
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pageVisited = pageNumber * coinsPerPage;

  //const displayCoins = listCoins.slice(pageVisited, pageVisited + coinsPerPage);
  const pageCount = Math.ceil(
    listCoins.filter((coin) => {
      if (inputValue === "") {
        return coin;
      } else {
        return coin.name.toLowerCase().includes(inputValue.toLowerCase());
      }
    }).length / coinsPerPage
  );
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  useEffect(() => {
    setPageNumber(0);
  }, [inputValue]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <CryptoContext.Provider
      value={{
        isLoading,
        listCoins,
        inputValue,
        setInputValue,
        inputSearch,
        coinsPerPage,
        pageCount,
        changePage,
        pageNumber,
        pageVisited,
        isError,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
