import React from 'react'
import venetian from '../public/api/hotels/venetian.json'

class Description extends React.Component {

   constructor() {
      super()
      this.state = {
         is_excerpt: true
      }
   }

   toggle_description() {
      if (this.state.is_excerpt)
         this.setState({ is_excerpt: false })
      else
         this.setState({ is_excerpt: true })
   }

   render() {

      const excerpt = () => {
         // set the max_chars you want for excerpt; will trim to end of prior paragraph
         const max_chars = 800
         const chunk = venetian.description.slice(0, max_chars)
         const trimmed_desc = chunk.slice(0, chunk.lastIndexOf('\r\n\r\n'))
         return (
          <div>
             <p style={{ whiteSpace: 'pre-line' }}>
                {trimmed_desc}
             </p>
          </div>
         )
      }

      const full_description =
             <div>
                <p style={{ whiteSpace: 'pre-line' }}>
                   {venetian.description}
                </p>
             </div>

      if (this.state.is_excerpt)

         return (
          <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px' }}>
             <div className="col-xs-12">
                {excerpt()}
                <p className="navigate" onClick={(e) => this.toggle_description(e)}>
                   SHOW FULL DESCRIPTION&nbsp;
                   <span className="icon icon__circle">&#x2193;</span>
                </p>
             </div>
          </div>
         )

      else return (
       <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px' }}>
          <div className="col-xs-12">
             {full_description}
             <p className="navigate" onClick={(e) => this.toggle_description(e)}>
                HIDE FULL DESCRIPTION&nbsp;
                <span className="icon icon__circle">&#x2191;</span>
             </p>
          </div>
       </div>
      )
   }
}

export default Description
