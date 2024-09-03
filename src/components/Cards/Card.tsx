import React from "react";
import CardSection from "./CardSection";
import "./_Card.scss";

const Cards: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <CardSection />
      </div>
    </div>
  );
};

export default Cards;
