import React from 'react'
import OpinionCard from './OpinionCard'
import OpinionText from './OpinionText'
import './_Opinion.scss'

const Opinion: React.FC = () => {
  return (
    <section className='container-fluid'>
      <div className="row">
        <div className="opinion">
          <OpinionCard />
          <OpinionText />
        </div>
      </div>
    </section>
  )
}

export default Opinion