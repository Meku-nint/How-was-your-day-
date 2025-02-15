import React from 'react'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>The Page is not found <NavLink to='/'>Home</NavLink></div>
  )
}
export default NotFound