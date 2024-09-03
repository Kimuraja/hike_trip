import React from "react";
import OpinionCardContent from "./OpinionCardContent";
import "./_OpinionCard.scss";

const OpinionCard: React.FC = () => {
  return (
    <section className="container-fluid opinion">
      <div className="row">
        <div className="col">
          <div className="opinion__items">
            <OpinionCardContent />
            <OpinionCardContent />
            <OpinionCardContent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionCard;
