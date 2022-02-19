import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Productdetail() {
  return (
    <div>Productdetail
          <Link to='/products/:id/notFound'>Click Me</Link>
          <Outlet/>
    </div>
  )
}

export default Productdetail