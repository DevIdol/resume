import React, { useState, useEffect, Fragment } from 'react'
import ReactLoading from 'react-loading'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeProvider } from './Context/ThemeContext'

const PreLoader = () => {
  const [done, setDone] = useState(undefined)

  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000)
  }, [])

  return (
    <Fragment>
      {!done ? (
        <ReactLoading
          type={'bars'}
          color={'#b60741'}
          height={100}
          width={100}
          className="preloader"
        />
      ) : (
        <App />
      )}
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <PreLoader />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
