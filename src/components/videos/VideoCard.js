import React, {memo} from 'react'
import { Avatar } from '@material-ui/core'

const VideoCard = memo(({ imgUrl, title, channel, views, timestamp, channelImgUrl }) => (
  <div className='videos__videoCard'>
    <img src={imgUrl} alt={title} className='videos__thumbnail'/>
    <div className="videos__info">
      <Avatar src={channelImgUrl} alt={channel} className='videos__avatar' />
      <div className="vidoes__text">
        <h4>{title}</h4>
        <p>{channel}</p>
        <p>{views} - {timestamp}</p>
      </div>
    </div>
  </div>
))

export default VideoCard
