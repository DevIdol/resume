import React, { useState, useEffect, useContext, Fragment } from 'react'
import ReactLoading from 'react-loading'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ThemeContext, ThemeProvider } from './Context/ThemeContext'

const PreLoader = () => {
  const [{ theme }] = useContext(ThemeContext)
  const [done, setDone] = useState(undefined)
  const loadingColor = theme === 'dark' ? '#65fcdb' : '#db084e'
  useEffect(() => {
    setTimeout(() => {
      setDone(true)
    }, 2000)
  }, [])

  return (
    <Fragment>
      {!done ? (
        <div id="preloader">
          <h3>Loading</h3>
          <ReactLoading
            className="preloaderIcon"
            type={'bubbles'}
            color={loadingColor}
            height={50}
            width={50}
          />
        </div>
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
