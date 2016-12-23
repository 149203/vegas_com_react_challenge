import React from 'react'

class TabBar extends React.Component {

   go_to_desc() {
      this.context.router.transitionTo('/')
   }

   go_to_details() {
      this.context.router.transitionTo('/details')
   }

   go_to_location() {
      this.context.router.transitionTo('/location')
   }

   render() {
      return (
       <div>
          <div className="col-xs-4 tab col-l-no-gutter pl-0">
             <button className="text-xs-center btn btn-block btn-tab"
                     onClick={(e) => this.go_to_desc(e)}>DESCRIPTION
             </button>
          </div>
          <div className="col-xs-4 tab col-l-no-gutter col-r-no-gutter">
             <button className="text-xs-center btn btn-block btn-tab"
                     onClick={(e) => this.go_to_details(e)}>DETAILS
             </button>
          </div>
          <div className="col-xs-4 tab col-r-no-gutter pr-0">
             <button className="text-xs-center btn btn-block btn-tab"
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
