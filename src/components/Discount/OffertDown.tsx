import FriendsHug from '../../media/dual_gallery_hug.png';
import './_OffertDown.scss';

const OffertDown: React.FC = () => {
  return (
    <div className="col offert-down">
      <div className="offert-down__section">
        <div className="offert-down__textarea">
          <div className="offert-down__textarea__content">
            <h3 className="offert-down__heading">
              January's Promo: <a>Buy 1 Get 1 Free!</a>
            </h3>
            <p className="offert-down__description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
            <button className="offert-down__button">Read More</button>
          </div>
        </div>
        <img src={FriendsHug} className='offert-down__image' />
      </div>
    </div>
  );
}

export default OffertDown;
