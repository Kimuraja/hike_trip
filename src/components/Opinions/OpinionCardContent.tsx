import React from "react";
import './_OpinionCardContent.scss'

const OpinionCardContent: React.FC = () => {
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="opinion-card__textarea">
            <h2 className="opinion-card__textarea__heading">Lorem ipsum</h2>
            <p className="opinion-card__textarea__description">
              Lorem ipsum dolor sit amet, consecte sectetur adipisicing elit,
              tation omne ullamco laboris nisi ut aliqolore.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpinionCardContent;
