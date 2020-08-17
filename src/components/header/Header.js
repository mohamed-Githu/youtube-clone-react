import React from 'react'
import './header.scss'
import logo from '../../assets/logo.png'

import NotificationsIcon from '@material-ui/icons/Notifications'
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp'
import MenuIcon from '@material-ui/icons/Menu'
import AppsIcon from '@material-ui/icons/Apps'
import { IconButton, Avatar } from '@material-ui/core'

import Form from './Form'
import { Link } from 'react-router-dom'

const Header = React.memo(() => (
  <div className='header'>
    <IconButton><MenuIcon className='header__icon' /></IconButton>
    <Link to='/'><img src={logo} alt="youtube logo" className='header__logo'/></Link>
    <Form />
    <IconButton><VideoCallSharpIcon className='header__icon' /></IconButton>
    <IconButton><AppsIcon className='header__icon' /></IconButton>
    <IconButton><NotificationsIcon className='header__icon' /></IconButton>
    <Avatar alt='Mohamed Hussein' className='header__avatar' />
  </div>
))

export default Header
