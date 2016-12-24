import React from 'react'
import rates from '../public/api/hotels/index.json'
import AllRatesItem from '../components/AllRatesItem'

const AllRates = () =>
 <div className="all_rates">
    {rates.list.map(hotel =>
     <AllRatesItem name={hotel.name}
                   price={hotel.price.toFixed(2)}
                   key={hotel.code}/>
    )}
 </div>

export default AllRates
