import React from 'react'
import spinner from '../layout/asset/spinner.gif'

function Spinner() {
  return (
    <img width={180} className="text-center mx-auto" src={spinner} alt="Loading...."/>
  )
}

export default Spinner