import React from 'react'

const HotelOverview = () =>
 <div className="row">
    <div className="col-sm-7 col-md-8">

       <h1 className="hidden-md-down">VENETIAN&nbsp;
          <span className="icon icon-star">&#x2605;</span>
          <span className="icon icon-star">&#x2605;</span>
          <span className="icon icon-star">&#x2605;</span>
          <span className="icon icon-star">&#x2605;</span>
          <span className="icon icon-star">&#x2605;</span>
       </h1>

       <div className="hidden-lg-up">
          <h1>VENETIAN</h1>
          <p>
             <span className="icon icon-star">&#x2605;</span>
             <span className="icon icon-star">&#x2605;</span>
             <span className="icon icon-star">&#x2605;</span>
             <span className="icon icon-star">&#x2605;</span>
             <span className="icon icon-star">&#x2605;</span>
          </p>
       </div>

       <div className="hidden-sm-down">
          <p className="subtext"><span className="icon">&#x2352;</span>&nbsp;Strip&nbsp;&nbsp;
             <span className="icon">&#x2706;</span>&nbsp;1-999-999-9999&nbsp;&nbsp;
             <span className="icon">&#x2764;</span>&nbsp;Best Price Guarantee</p>
       </div>
       <div className="hidden-md-up mb-2">
          <p className="subtext"><span className="icon">&#x2352;</span>&nbsp;Strip</p>
          <p className="subtext"><span className="icon">&#x2706;</span>&nbsp;1-999-999-9999</p>
          <p className="subtext"><span className="icon">&#x2764;</span>&nbsp;Best Price Guarantee</p>
       </div>
    </div>

    <div className="col-sm-5 col-md-4 text-md-right">
       <p className="price">$128</p>
       <p className="grey" style={{ marginTop: '-2.5rem', fontSize: '0.9rem' }}>HOTEL ROOMS FROM</p>
    </div>

 </div>

export default HotelOverview
