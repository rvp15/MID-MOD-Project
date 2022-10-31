import {Icon   } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/volcano'

const VolcanoMarker = ({lat,lng,onClick}) => {
  return (
    <div className='location-marker' onClick={onClick}>
    <Icon icon={locationIcon} className='location-icon'/>
  
</div>
  )
}

export default VolcanoMarker
