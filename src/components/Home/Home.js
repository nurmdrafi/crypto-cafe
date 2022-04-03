import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
      <h1>
        Welcome to <b>Crypto <span>Watch</span></b>
      </h1>
      <Link to="/coins">
        <button type="button" className="btn btn-dark">
          Explore Coins
        </button>
      </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
