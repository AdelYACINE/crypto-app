import { useContext } from "react";
import { useParams } from "react-router-dom";
import CryptoContext from "../../context/cryptoContext/CryptoContext";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const CryptoDisplay = () => {
  const { listCoins } = useContext(CryptoContext);

  const { id } = useParams();

  const coin = listCoins[id - 1];

  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      exit={{ y: -1000 }}
      className="display-card-container"
    >
      <div className="card text-white bg-secondary mb-3 card-display">
        <div className="card-header">
          <img src={coin?.icon} alt="img" className="icon-coin icon-display" />
        </div>
        <div className="card-body">
          <h4 className="card-title card-title-display">{coin?.name}</h4>

          <div className="detail-display-card">
            <p className="card-text">
              <span className="label">Price :</span>{" "}
              <span>$ {coin?.price}</span>
            </p>
            <p className="card-text">
              <span className="label">24H change :</span>
              <span>{coin?.priceChange1d} %</span>
            </p>

            <p className="card-text">
              <span className="label">1H change :</span>
              <span>{coin?.priceChange1h} %</span>
            </p>

            <p className="card-text">
              <span className="label">1Week change :</span>
              <span>{coin?.priceChange1w} %</span>
            </p>
            <p className="card-text">
              <span className="label">priceBtc :</span>
              <span> {coin?.priceBtc}</span>
            </p>
            <p className="card-text">
              <span className="label">Symbol :</span>
              <span> {coin?.symbol}</span>
            </p>
            <p className="card-text">
              <span className="label">Rank :</span>
              <span> {coin?.rank}</span>
            </p>
            <a href={coin?.twitterUrl} target="_blank" rel="noreferrer">
              <FaTwitter className="twitter-icon" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CryptoDisplay;
