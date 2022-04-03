import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CoinCard.css";

const CoinCard = ({ data }) => {
  const { id, name, image, symbol } = data;
  return (
    <Col className="card-container">
      <Link to={`/coin-details/${id}`} style={{textDecoration: 'none', color: 'black'}}>
        <Card style={{ border: "none", backgroundColor: "transparent" }}>
          <div className="coin-card">
            <div className="image-container">
              <img src={image} alt="" />
            </div>
            <div className="card-details">
              <p>{name}</p>
              <p className="text-muted">{symbol}</p>
            </div>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default CoinCard;
