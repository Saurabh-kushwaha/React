import React from 'react'
import { Link } from 'react-router-dom'
import styled from './design.module.css'

function Navbar() {
  return (
    <div>  
        <div className={styled.box}>
            <Link to='/' className={styled.box}>Home</Link>
            <Link to ='products' className={styled.box}>All Products </Link>
        </div>      
    </div>
  )
}

export default Navbar