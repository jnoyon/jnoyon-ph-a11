import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <>
    <NavLink to="/"> Home </NavLink>
            <NavLink to="/rooms"> Rooms </NavLink>
            <NavLink to="/my-bookings"> My Bookings </NavLink>
            
    </>
  )
}
