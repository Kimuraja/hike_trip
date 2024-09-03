import './_Explore.scss'
import React from 'react'

const Explore: React.FC = () => {
  return (
    <>
    <section className='container-fluid explore'>
    <div className="explore__space-top"></div> 
      <div className="row">
        <div className="col-12 explore__textarea">
          <h1 className="explore__heading">
            Explore <span className='explore__text'>The World</span>
          </h1>
        </div>
      </div>
    <div className="explore__space-bottom"></div> 
    </section>
    </>
  )
}

export default Explore