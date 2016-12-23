import React from 'react'

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

      const excerpt =
             <div>
                <p className="title">
                   Number of rooms:
                </p>
                <p>
                   4,027 -- 3,014 suites in the main tower and 1,013 suites in the Venezia tower.
                </p>

                <p className="title">
                   Casino:
                </p>
                <p>
                   Yes, 120,000 square feet. Casino games include blackjack, craps, roulette, baccarat, pai gow, pai gow poker, Caribbean Stud Poker, Let It Ride and keno. There are nearly 2,500 slot and video poker machines, with Megabucks and Wheel of Fortune. An elegant poker room is also housed at the resort.
                </p>

             </div>

      const full_description =
             <div>
                <p className="title">Number of rooms:</p>
                <p>
                   4,027 -- 3,014 suites in the main tower and 1,013 suites in the Venezia tower.
                </p>

                <p className="title">Casino:</p>
                <p>
                   Yes, 120,000 square feet. Casino games include blackjack, craps, roulette, baccarat, pai gow, pai gow poker, Caribbean Stud Poker, Let It Ride and keno. There are nearly 2,500 slot and video poker machines, with Megabucks and Wheel of Fortune. An elegant poker room is also housed at the resort.
                </p>

                <p className="title">Race & Sports Book:</p>
                <p>
                   Yes, the Cantor Race and Sports Book at The Venetian is equipped with one of the world's largest screens that can show 34 separate sporting events simultaneously.
                </p>

                <p className="title">Child-care Facilities:</p>
                <p>
                   No.
                </p>

                <p className="title">Room Service:</p>
                <p>
                   Yes.
                </p>

             </div>

      if (this.state.is_excerpt)

         return (
          <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px' }}>
             <div className="col-xs-12">

                {excerpt}

                <p className="navigate" onClick={(e) => this.toggle_details(e)}>VIEW MORE DETAILS</p>

             </div>
          </div>
         )

      else return (
       <div className="row mt-1 grey__dark" style={{ marginLeft: '6px', marginRight: '6px'}}>
          <div className="col-xs-12">

             {full_description}

             <p className="navigate" onClick={(e) => this.toggle_details(e)}>VIEW LESS DETAILS</p>

          </div>
       </div>
      )
   }
}

export default Details
