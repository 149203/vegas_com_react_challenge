import React from 'react'

const TabBar = () =>
 <div>
    <div className="col-xs-4 tab col-l-no-gutter pl-0">
       <button className="text-xs-center btn btn-block btn-tab">DESCRIPTION</button>
    </div>
    <div className="col-xs-4 tab col-l-no-gutter col-r-no-gutter">
       <button className="text-xs-center btn btn-block btn-tab">DETAILS</button>
    </div>
    <div className="col-xs-4 tab col-r-no-gutter pr-0">
       <button className="text-xs-center btn btn-block btn-tab">LOCATION</button>
    </div>
 </div>

export default TabBar
