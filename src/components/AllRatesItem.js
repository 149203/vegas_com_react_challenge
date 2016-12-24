import React from 'react'

const AllRatesItem = (props) =>
    <div className="row">
       <div className="col-xs-9">
          <p className="purple">{props.name}</p>
       </div>
       <div className="col-xs-3">
          <p className="text-xs-right grey" style={{ marginLeft: '-1rem' }}>{props.price}</p>
       </div>
    </div>

export default AllRatesItem