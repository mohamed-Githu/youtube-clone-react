import React, { memo } from 'react'

const VideoRow = memo(({ imgUrl, description, title, channel, subs, timestamp, views }) => (
  <div className='videoRow'>
    <img src={imgUrl} alt={title} />
    <div className='videoRow__info'>
      <h3>{title}</h3>
      <p className='videoRow__headline'>
        {channel} - 
        <span className='videoRow__subs'>
          <span className='videoRow__subsNum'>{subs}</span> subscribers
        </span>
        {views} views - {timestamp}
      </p>
      <p className='videoRow__description'>{description}</p>
    </div>
  </div>
))

export default VideoRow
