import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import _find from 'lodash/find'
import icons from '../components/icons'

const loc = venetian.location
const full_address = `${loc.address}, ${loc.city}, ${loc.state} ${loc.postalCode}`
const media = venetian.media
const map_src = _find(media, (val) => val.type === 'productMap').href
const map_title = map_src.slice(map_src.lastIndexOf('/') + 1, map_src.lastIndexOf('.'))

const Location = () =>
 <div className="row mt-1" style={{ marginLeft: '6px', marginRight: '6px' }}>
    <div className="col-xs-12">
       <p className="location_label"><span className="icon">{icons.mark}</span>&nbsp;&nbsp;{full_address}</p>
       <img className="img-fluid mb-2" src={`public${map_src}`} alt={map_title} title={map_title}/>
    </div>
 </div>

export default Location
