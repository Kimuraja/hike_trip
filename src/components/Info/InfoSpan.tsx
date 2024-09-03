import React from "react";
import { useState } from "react";
import './_InfoSpan.scss';

const InfoSpan: React.FC = () => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const setButtonClicked = () => {
    setIsToggle(!isToggle);
  };

  return (
    <section className="content">
      {isToggle ? (
        <div className="content__textarea">
          <span className="content__textarea--span">
            Lorem ipsum dolor sit amet, consectetur adipisicing
            elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam quis
          </span>
          <button onClick={setButtonClicked} className="content__textarea--button">
            Read {!isToggle ? "More" : "Less"}
          </button>
        </div>
      ) : (
        <button onClick={setButtonClicked} className="content__textarea--button">Read More</button>
      )}
      
    </section>
  );
};

export default InfoSpan;
