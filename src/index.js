import React, { useState, useEffect, Fragment } from 'react'
import ReactLoading from 'react-loading'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import classes from './preloader.module.css'

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
          className={classes.preloader}
        />
      ) : (
        <App />
      )}
    </Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <PreLoader />
  </React.StrictMode>,
  document.getElementById('root'),
)
