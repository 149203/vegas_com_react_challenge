import React from 'react'

const DetailsItem = (props) =>
 <div>
    <p className="title">
       {props.detail.label}
    </p>
    <p>
       {props.detail.value}
    </p>
 </div>

export default DetailsItem