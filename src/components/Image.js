import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import _find from 'lodash/find'

const media = venetian.media
const image_src = _find(media, (val) => val.type === 'productImage').href
const image_title = image_src.slice(image_src.lastIndexOf('/') + 1, image_src.lastIndexOf('.'))

const Image = () =>
 <img className="img-fluid" src={`public${image_src}`} alt={image_title} title={image_title}/>
export default Image
