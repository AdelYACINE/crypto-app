import { useContext } from "react";
import Cards from "./Cards";
import ReactPaginate from "react-paginate";
import Loader from "../loader/Loader";
import CryptoContext from "../../context/cryptoContext/CryptoContext";
import FormSearch from "./FormSearch";
import ErrorMsg from "./ErrorMsg";
import { motion } from "framer-motion";

const Crypto = () => {
  const {
    isLoading,
    inputValue,
    listCoins,
    coinsPerPage,
    pageCount,
    changePage,
    pageNumber,
    pageVisited,
    isError,
  } = useContext(CryptoContext);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        exit={{ y: -1000 }}
        className="crypto-container"
      >
        <FormSearch />

        {!isLoading ? (
          <div className="cards-container">
            {!isError ? (
              listCoins
                .filter((coin) => {
                  if (inputValue === "") {
                    return coin;
                  } else {
                    return coin.name
                      .toLowerCase()
                      .includes(inputValue.toLowerCase());
                  }
                })
                .slice(pageVisited, pageVisited + coinsPerPage)
                .map((coin, i) => {
                  return <Cards key={i} coin={coin} />;
                })
            ) : (
              <ErrorMsg />
            )}
          </div>
        ) : (
          <Loader />
        )}

        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
          forcePage={Math.min(pageNumber, pageCount - 1)}
        />
      </motion.div>
    </>
  );
};

export default Crypto;
