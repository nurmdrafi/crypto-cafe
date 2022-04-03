import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CoinDetails.css";
import Footer from "../Footer/Footer";

const CoinDetails = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      .then((res) => res.json())
      .then((data) => setCoin(data));
  }, [id]);
  return (
    <div>
      <div className="coin-details d-block d-md-flex justify-content-md-around">
        <div className="d-flex justify-content-center my-3">
          <div className="details">
            <h2>General Info</h2>
            <p>Coin Name: {coin.name}</p>
            <p>Market Cap Rank: {coin.market_cap_rank}</p>
            <p>Origin: </p>
            <p>Contract Address: </p>
            <p>Hashing Algorithm: {coin.hashing_algorithm}</p>
            <p>Genesis Date: {coin.genesis_date}</p>
            <p>Last Updated: {coin.last_updated}</p>
            <br />
            <h2>Scores:</h2>
            <p>Community Score: {coin.community_score}</p>
            <p>Developer Score: {coin.developer_score}</p>
            <p>Liquidity Score: {coin.liquidity_score}</p>
            <p>Public Interest Score: {coin.public_interest_score}</p>
          </div>
        </div>
        <div className="image-container d-flex justify-content-center">
          <img src={coin.image?.large} alt="" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CoinDetails;
