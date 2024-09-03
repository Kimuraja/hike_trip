import CardContent from "./CardContent";
import FriendsResting from "../../media/gallery_friends.png";
import WomanResting from "../../media/gallery_girlontop.png";
import WomanHappy from "../../media/gallery_girlsitting.png";
import Leaf from "../../media/Shadow_.png";

const CardSection: React.FC = () => {
  return (
    <section className="container-fluid card-section">
      <div className="row">
        <div className="card-items">
          <div className="card-items__textarea">
            <div className="card-items__heading">
              <h1 className="card-items__title">Let's Go</h1>
              <p className="card-items__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Vivamus lacina odio vitae vestibulum vestibulum
              </p>
            </div>
            <div className="row card-items__content">
              <div className="col card-items__content--item">
                <CardContent card_image={WomanHappy} />
              </div>
              <div className="col card-items__content--item">
                <CardContent card_image={FriendsResting} />
              </div>
              <div className="col card-items__content--item">
                <CardContent card_image={WomanResting} />
              </div>
            </div>
            <div className="card-items__footer">
              <button className="card-items__footer--button">Show More</button>
            </div>
          </div>
          <div className="card-items__leaf">
            <img
              src={Leaf}
              alt="leaf decoration"
              className="card-items__leaf--image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
