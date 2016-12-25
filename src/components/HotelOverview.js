import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import icons from '../components/icons'

function print_stars(rating) {
   let arr = []
   for (let i = 0; i < rating; i++) {
      arr.push(<span className="icon icon-star">{icons.star}</span>)
   }
   return arr
}

const area = venetian.location.areaName
const phone = venetian.phoneNumber
const hotel_name = venetian.name
const price = venetian.price.toFixed()
const stars = print_stars(venetian.starRating).map((star, i) => <span key={i}>{star}</span>)

const HotelOverview = () =>
 <div className="row">
    <div className="col-sm-7 col-md-8">
       <h1 className="hidden-md-down"
           style={{ textTransform: 'uppercase' }}>{hotel_name}&nbsp;
          {stars}
       </h1>

       <div className="hidden-lg-up">
          <h1 style={{ textTransform: 'uppercase' }}>{hotel_name}</h1>
          <p>
             {stars}
          </p>
       </div>

       <div className="hidden-sm-down">
          <p className="subtext"><span className="icon">{icons.mark}</span>&nbsp;{area}&nbsp;&nbsp;
             <span className="icon">{icons.phone}</span>&nbsp;{phone}&nbsp;&nbsp;
             <span className="icon">{icons.like}</span>&nbsp;Best Price Guarantee</p>
       </div>

       <div className="hidden-md-up mb-2">
          <p className="subtext"><span className="icon">{icons.mark}</span>&nbsp;{area}</p>
          <p className="subtext"><span className="icon">{icons.phone}</span>&nbsp;{phone}</p>
          <p className="subtext"><span className="icon">{icons.like}</span>&nbsp;Best Price Guarantee</p>
       </div>

    </div>

    <div className="col-sm-5 col-md-4 text-md-right">
       <p className="price">${price}</p>
       <p className="grey" style={{ marginTop: '-2.5rem', fontSize: '0.9rem' }}>HOTEL ROOMS FROM</p>
    </div>

 </div>

export default HotelOverview
