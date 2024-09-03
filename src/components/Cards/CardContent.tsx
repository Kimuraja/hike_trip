import React from 'react';
import './_CardContent.scss';

type T = {
  card_image: string;
};

const CardsContent: React.FC<T> = ({ card_image }) => {
  return (
    <section className="container">
      <div className="row">
        <div className="card">
          <img src={card_image} alt="card" className="card__image" />
          <div className="card__description">
            <h1 className="card__title">Lorem ipsum</h1>
            <p className="card__text">Lorem ipsum dolor sit amet, consectetur adipsicing...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardsContent;
