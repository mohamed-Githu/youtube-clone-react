import React from 'react'

const SideRow = React.memo(({ title, Icon }) => (
  <div className='sideBar__row'>
    <Icon className='sideBar__icon' />
    <h5 className='sideBar__title'>{title}</h5>
  </div>
))

export default SideRow
