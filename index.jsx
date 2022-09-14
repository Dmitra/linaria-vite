import React from 'react'
import { createRoot } from 'react-dom/client'
import { css } from '@linaria/core'

const styles = css`
  display: flex;
`
function App () {
  return (
    <div className={ styles }>Test</div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('root'))
  root.render(
    <App/>
  )
})