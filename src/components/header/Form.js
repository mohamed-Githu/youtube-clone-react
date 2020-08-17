import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const Form = () => {
  const [input, setInput] = useState('')
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()
    if (input) {
      history.push(`/search/${input}`)
    }
  }

  return (
    <form className='header__form' onSubmit={onSubmit}>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='Search' />
      <button type="submit">
        <SearchIcon className='header__icon header__search' />
      </button>
    </form>
  )
}

export default Form
