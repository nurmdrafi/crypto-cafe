import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <h1>
        Welcome to <b>Crypto <span>Watch</span></b>
      </h1>
      <Link to="/coins">
        <button type="button" class="btn btn-dark">
          Explore Coins
        </button>
      </Link>
    </div>
  );
};

export default Home;
