import React, { Fragment, useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext'

const App = () => {
  const [{ theme }, toggleTheme] = useContext(ThemeContext)
  return (
    <Fragment>
      <h1>Welcome</h1>
      <button onClick={toggleTheme}>
        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </Fragment>
  )
}

export default App
