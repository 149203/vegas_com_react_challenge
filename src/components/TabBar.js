import React from 'react'
import {add_class, remove_class} from '../utils'

class TabBar extends React.Component {

   go_to_desc() {
      add_class(document.getElementById('desc-tab'), 'btn-tab-active')
      remove_class(document.getElementById('details-tab'), 'btn-tab-active')
      remove_class(document.getElementById('location-tab'), 'btn-tab-active')
      this.context.router.transitionTo('/')
   }

   go_to_details() {
      remove_class(document.getElementById('desc-tab'), 'btn-tab-active')
      add_class(document.getElementById('details-tab'), 'btn-tab-active')
      remove_class(document.getElementById('location-tab'), 'btn-tab-active')
      this.context.router.transitionTo('/details')
   }

   go_to_location() {
      remove_class(document.getElementById('desc-tab'), 'btn-tab-active')
      remove_class(document.getElementById('details-tab'), 'btn-tab-active')
      add_class(document.getElementById('location-tab'), 'btn-tab-active')
      this.context.router.transitionTo('/location')
   }

   render() {
      return (
       <div>
          <div className="col-xs-4 tab col-l-no-gutter pl-0">
             <button id="desc-tab"
                     className="text-xs-center btn btn-block btn-tab btn-tab-active"
                     onClick={(e) => this.go_to_desc(e)}>DESCRIPTION
             </button>
          </div>
          <div className="col-xs-4 tab col-l-no-gutter col-r-no-gutter">
             <button id="details-tab"
                     className="text-xs-center btn btn-block btn-tab"
                     onClick={(e) => this.go_to_details(e)}>DETAILS
             </button>
          </div>
          <div className="col-xs-4 tab col-r-no-gutter pr-0">
             <button id="location-tab"
                     className="text-xs-center btn btn-block btn-tab"
                     onClick={(e) => this.go_to_location(e)}>LOCATION
             </button>
          </div>
       </div>
      )
   }
}

TabBar.contextTypes = {
   router: React.PropTypes.object
}

export default TabBar
