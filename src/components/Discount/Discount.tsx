import './_Discount.scss'
import React from 'react'
import OffertUp from './OffertUp'
import OffertDown from './OffertDown'

const Discount: React.FC = () =>{
  return (
    <section className="container-fluid">
      <div className="row">
        <div className="col-12">
          <OffertUp />
          <OffertDown />
        </div>
      </div>
    </section>
  )
}

export default Discount