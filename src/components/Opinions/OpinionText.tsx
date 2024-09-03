import "./_OpinionText.scss";
import React from "react";
import Leaf from "../../media/Shadow_.png";

const OpinionText: React.FC = () => {
  return (
    <section className="container-fluid">
      <div className="col">
        <div className="opinion-text">
          <h1 className="opinion-text__sign">"</h1>
          <p className="opinion-text__description col-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis
          </p>
          <span className="opinion-text__author">Lorem Ipsum</span>
          <div className="opinion-text__decoration-leaf-right">
            <img src={Leaf} alt="leaf decoration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionText;
