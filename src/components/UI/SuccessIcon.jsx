import React from 'react'
import succesIcon from "../../assets/images/icon-success.svg";


function SuccessIcon({...props}) {
  return (
    <img src={succesIcon} className='mb-2' alt="success-icon" {...props} />
  )
}

export default SuccessIcon