import React from 'react'

function Button({children, ...props}) {
  return (
    <button id='button' {...props}>{children}</button>
  )
}

export default Button