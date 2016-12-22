import React from 'react'
import { render } from 'react-dom'

// components
import Nav from './components/Nav'
import HotelOverview from './components/HotelOverview'
import HotelRate from './components/HotelRate'
import Image from './components/Image'
import AllRates from './components/AllRates'
import TabBar from './components/TabBar'
import Description from './components/Description'
import Details from './components/Details'
import Location from './components/Location'

require('./styles/imports.scss')
// using require instead of import because importing something that webstorm views as not used in this file, will be deleted on beautify

const App = () =>
<div className="container">
   <div className="row">
      <div className="col-xs-12">
         <Nav />
      </div>
   </div>

   <div className="row">
      <div className="col-xs-12 col-lg-9 float-xs-right">
         <HotelOverview/>
         <HotelRate/>
         <TabBar/>
         <Description/>
         <Details/>
         <Location/>
      </div>

      <div className="col-xs-12 col-lg-3">
         <Image/>
         <AllRates/>
      </div>
   </div>

</div>

render(<App/>, document.getElementById('app'))