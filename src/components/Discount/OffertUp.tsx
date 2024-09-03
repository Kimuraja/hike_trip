import Friends from '../../media/dual_gallery_sit.png'
import './_OffertUp.scss'

const OffertUp: React.FC = () =>{
  return (
    <div className="col offert-up">
      <div className="offert-up__section">
        <img src={Friends} alt='Friends' className='offert-up__image'/>
        <div className="offert-up__textarea">
          <div className="offert-up__textarea__content">
            <h3 className="offert-up__heading">Discount up to 50% All Excursions</h3>
            <p className="offert-up__description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
            </p>
            <button className="offert-up__button">Read More</button> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default OffertUp;
