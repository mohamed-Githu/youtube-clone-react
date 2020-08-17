import React from 'react'
import './searchPage.scss'

import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import { IconButton } from '@material-ui/core'
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

const SearchPage = () => {
  return (
    <div className='searchPage'>
      <div className="searchPage__filter">
        <IconButton><TuneOutlinedIcon /></IconButton>
        <h2>filter</h2>
      </div>
      <hr/>
      <ChannelRow
        imgUrl='//yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo'
        subs='711k'
        videos='395k'
        description='You can have awesome programming videos here! And make and income with js'
        channel='Clever Programer'
        verified
      />
      <hr/>
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
      <VideoRow 
        imgUrl='https://i.ytimg.com/vi/rJjaqSTzOxI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBunAWTjl8qA5eq9qL5rmx1KwNkOA'
        title='🔴 Build a TWITTER Clone with REACT JS for Beginners'
        description='Do you wanna build a twitter clone in 4 hours training? What are you wating for'
        subs='395k'
        timestamp='5 days ago'
        views='1.5m'
        channel='Clever Programmer'
      />
    </div>
  )
}

export default SearchPage
