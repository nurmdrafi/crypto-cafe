import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CoinCard.css";

const CoinCard = ({ data }) => {
  const { id, name, image, symbol } = data;
  return (
    <Col className="card-container">
      <Card>
        <div className="coin-card">
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <div>
            <p>{name}</p>
            <p className="text-muted">{symbol}</p>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default CoinCard;
