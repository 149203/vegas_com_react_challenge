import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import DetailsItem from '../components/DetailsItem'
import icons from '../components/icons'

const details = venetian.details

class Details extends React.Component {

   constructor() {
      super()
      this.state = {
         is_excerpt: true
      }
   }

   toggle_details() {
      if (this.state.is_excerpt)
         this.setState({ is_excerpt: false })
      else
         this.setState({ is_excerpt: true })
   }

   render() {

      if (this.state.is_excerpt) {
         // set the max_details you want for excerpt
         const max_details = 2
         const first_details = details.slice(0, max_details)
         const excerpt = first_details.map((detail, i) =>
          <DetailsItem detail={detail} key={i}/>
         )

         return (
          <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px' }}>
             <div className="col-xs-12">
                {excerpt}
                <p className="navigate" onClick={(e) => this.toggle_details(e)}>
                   VIEW MORE DETAILS&nbsp;
                   <span className="icon icon__circle">{icons.down}</span>
                </p>
             </div>
          </div>
         )
      }

      else {
         const full_details = details.map((detail, i) =>
          <DetailsItem detail={detail} key={i}/>
         )

         return (
          <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px' }}>
             <div className="col-xs-12">
                {full_details}
                <p className="navigate" onClick={(e) => this.toggle_details(e)}>
                   VIEW LESS DETAILS&nbsp;
                   <span className="icon icon__circle">{icons.up}</span>
                </p>
             </div>
          </div>
         )
      }
   }
}

export default Details
