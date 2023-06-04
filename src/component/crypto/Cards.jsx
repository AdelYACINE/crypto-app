import { useNavigate } from "react-router-dom";

const Cards = ({ coin }) => {
  const Navigate = useNavigate();

  return (
    <>
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">
          <img src={coin.icon} alt="img" className="icon-coin" />
        </div>
        <div className="card-body">
          <h4 className="card-title">{coin.name}</h4>
          <p className="card-text">{coin.symbol}</p>
          <button
            type="button"
            className="btn btn-outline-light btn-card"
            onClick={() => Navigate(`/cryptos/${coin.rank}`)}
          >
            View more
          </button>
        </div>
      </div>
    </>
  );
};

export default Cards;
