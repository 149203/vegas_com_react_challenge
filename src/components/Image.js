import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import _find from 'lodash/find'

const image_media = _find(venetian.media, (val) => val.type === 'productImage')

const Image = () =>
 <img className="img-fluid" src={`../public${image_media.href}`}/>
export default Image
