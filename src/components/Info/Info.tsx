import "./_Info.scss";
import React from "react";
import MediaQuery from "react-responsive";
import InfoSpan from "./InfoSpan";
import Leaf from '../../media/shadow_left.png'

const Info: React.FC = () => {
  return (
    <section className="container-fluid info">
      <div className="row">
        <div className="col-12">
          <div className="info__content">
            <div className="info__space-top"></div>
            <div className="info__textarea">
            <img src={Leaf} alt="leaf" className="info__leaf" />
              <h3 className="info__heading">
                Hiking in the mountains
              </h3>
              <p className="info__description">
                <MediaQuery maxWidth={400}>
                  {(mobile) =>
                    mobile ? (
                      <InfoSpan />
                    ) : (
                      <>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam quis
                      </>
                    )
                  }
                </MediaQuery>
              </p>
            </div>
            <div className="info__space-bottom"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
