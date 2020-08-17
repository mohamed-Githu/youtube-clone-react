import React, { memo } from 'react'
import { Avatar } from '@material-ui/core'
import VerifiedIcon from '@material-ui/icons/CheckCircle';

const ChannelRow = memo(({ imgUrl, channel, verified, subs, videos, description }) => (
  <div className='channelRow'>
    <Avatar src={imgUrl} alt={channel} className='channelRow__logo' />
    <div className='channelRow__text'>
      <h4>{channel} {verified && <VerifiedIcon />}</h4>
      <p>{subs} subscribers - {videos} videos</p>
      <p>{description}</p>
    </div>
  </div>
))

export default ChannelRow
