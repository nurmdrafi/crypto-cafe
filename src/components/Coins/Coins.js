import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CoinCard from "../CoinCard/CoinCard";
import Footer from "../Footer/Footer";
import "./Coins.css";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);
  console.log(coins.length);
  return (
    <div>
      <h2 className="text-center my-3">Available Crypto Currencies</h2>
      <p className="text-center mb-5">Total Coins: {coins.length}</p>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4" style={{ marginLeft: 0, marginRight: 0 }}>
        {coins.map((coin) => (
          <CoinCard key={coin.id} data={coin}></CoinCard>
        ))}
      </Row>
      {coins.length > 50 && <Footer></Footer>}
    </div>
  );
};

export default Coins;
