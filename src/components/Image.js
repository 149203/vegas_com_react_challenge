import React from 'react'
import venetian from '../public/api/hotels/venetian.json'
import _find from 'lodash/find'

const media = venetian.media
const image_media = _find(media, (val) => val.type === 'productImage')

const Image = () =>
 <img className="img-fluid" src={require('../public/assets/images/venetian.jpg')}/>
export default Image
