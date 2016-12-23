import React from 'react'

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

      const excerpt =
             <div>
                <p>
                   History has seen great empires literally rise from the dust. Similarly, modern day Las Vegas has been witness to the erection of colossal creations -- like The Venetian.
                </p>
                <p>
                   Opened in 1999, this megaresort, where the Sands Hotel of Rat Pack lore once stood, is situated in the center of the Strip. It's inspired by the art and architectural beauty of Venice, Italy's most romantic city. In fact, The Venetian has faithfully re-created such historic landmarks as the Campanile Tower, St. Mark's Square, the Rialto Bridge and Doge's Palace. Arched bridges, piazzas and cobblestone pathways are also incorporated throughout the property.
                </p>
             </div>

      const full_description =
             <div>
                <p>
                   History has seen great empires literally rise from the dust. Similarly, modern day Las Vegas has been witness to the erection of colossal creations -- like The Venetian.
                </p>
                <p>
                   Opened in 1999, this megaresort, where the Sands Hotel of Rat Pack lore once stood, is situated in the center of the Strip. It's inspired by the art and architectural beauty of Venice, Italy's most romantic city. In fact, The Venetian has faithfully re-created such historic landmarks as the Campanile Tower, St. Mark's Square, the Rialto Bridge and Doge's Palace. Arched bridges, piazzas and cobblestone pathways are also incorporated throughout the property.
                </p>

                <p>
                   The Venetian is also an eco-friendly property where you will find numerous green initiatives in place -- like LED lighting, solar panels, a reclaimed water system, eco-safe cleaning products, low-flush toilets and much more.
                </p>

                <p>
                   Among the activities offered, visitors can stroll inside and outside along canals teeming with authentic gondolas steered by singing gondoliers. Madame Tussauds Las Vegas, a worldwide attraction featuring celebrity wax figures, has a location at the front of the resort.
                </p>
                <p>
                   For more serious Broadway-caliber entertainment, head to The Venetian's custom-built Sands Theatre, which features the worldwide smash "Rock of Ages." Plus, a variety of headliners and comedians -- such as David Spade -- regularly appear here. The hotel is also home to "Smokey Robinson Presents Human Nature: The Motown Show" -- featuring a group of talented vocalists from Australia singing Motown tunes.
                </p>
             </div>

      if (this.state.is_excerpt)

         return (
          <div className="row mt-1 grey__dark" style={{ marginLeft: '6px' }}>
             <div className="col-xs-12">

                {excerpt}

                <p className="navigate" onClick={(e) => this.toggle_description(e)}>SHOW FULL DESCRIPTION</p>

             </div>
          </div>
         )

      else return (
       <div className="row mt-1 grey__dark" style={{ marginLeft: '6px' }}>
          <div className="col-xs-12">

             {full_description}

             <p className="navigate" onClick={(e) => this.toggle_description(e)}>HIDE FULL DESCRIPTION</p>

          </div>
       </div>
      )
   }
}

export default Description
