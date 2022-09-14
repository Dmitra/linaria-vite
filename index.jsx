// import '@babel/polyfill'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { css } from '@linaria/core'

const styles = css`
  display: flex;
`
function App () {
  return (
    <div className={ styles }></div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root-container'))
  root.render(
    <Provider store={ store }>
      <App/> }
    </Provider>,
  )
})