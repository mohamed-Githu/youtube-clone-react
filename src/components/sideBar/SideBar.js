import React from 'react'
import './sideBar.scss'
import SideRow from './SideRow'

import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import HistoryIcon from '@material-ui/icons/History'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SideBar = React.memo(() => {
  return (
    <div className='sideBar'>
      <SideRow title='Home' Icon={HomeIcon} />
      <SideRow title='Trending' Icon={WhatshotIcon} />
      <SideRow title='Subscriptions' Icon={SubscriptionsIcon} />
      <hr/>
      <SideRow title='Libray' Icon={VideoLibraryIcon} />
      <SideRow title='History' Icon={HistoryIcon} />
      <SideRow title='Your videos' Icon={OndemandVideoIcon} />
      <SideRow title='Watch later' Icon={WatchLaterIcon} />
      <SideRow title='Liked videos' Icon={ThumbUpIcon} />
      <SideRow title='Show more' Icon={ExpandMoreIcon} />
      <hr/>
    </div>
  )
})

export default SideBar
