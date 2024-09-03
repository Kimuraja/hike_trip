import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="container-fluid">

      <div className="row">
        <div className="col">
          <div className="newsletter">
            <div className="newsletter__space-top"></div> 
            <div className="newsletter__content">
                <h1 className="newsletter__heading">Title Here</h1>
                <p className="newsletter__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
                <div className="newsletter__form">
                  <form>
                    <input type="text" id="enter" className='newsletter__form--input' placeholder='Your Email' />
                    <button id="clear" type='submit' className='newsletter__form--button'>Subscribe</button>
                  </form>
                </div>
            </div>
              <div className="newsletter__space-bottom"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
