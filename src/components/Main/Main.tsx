import React from "react";
import "./_Main.scss";

const Main: React.FC = () => {
  return (
    <main className="container-fluid">
      <section className="row">
        <div className="main">
          <div className="main__textarea col-12">
            <div className="main__content">
              <h1 className="main__heading">It's time for hiking</h1>
              <p className="main__text">LoremIpsum Dolor</p>
              <button className="main__button">Read More</button>
              <span className="main__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </span>
            </div>
          </div>
          <div className="main__space-bottom"></div>
        </div>
      </section>
    </main>
  );
};

export default Main;
