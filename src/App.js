import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'

// components
import Nav from './components/Nav'
import HotelOverview from './components/HotelOverview'
import Image from './components/Image'
import AllRates from './components/AllRates'
import TabBar from './components/TabBar'
import Description from './components/Description'
import Details from './components/Details'
import Location from './components/Location'

require('./styles/imports.scss')
// using require instead of import because importing something that webstorm views as not used in this file, will be deleted on beautify

const App = () =>

 <BrowserRouter>
    <div className="container">
       <div className="row">
          <div className="col-xs-12">
             <Nav />
          </div>
       </div>

       <div className="row">
          <div className="col-xs-12 col-lg-8 col-xl-9 float-xs-right">
             <HotelOverview/>
             <div className="clearfix"></div>
             <TabBar/>
             <div className="clearfix"></div>
             <Match exactly pattern={'/'} component={Description} />
             <Match pattern={'/details'} component={Details} />
             <Match pattern={'/location'} component={Location} />
          </div>

          <div className="col-xs-12 col-lg-4 col-xl-3">
             <Image/>
             <AllRates/>
          </div>
       </div>

    </div>
 </BrowserRouter>

render(<App/>, document.getElementById('app'))