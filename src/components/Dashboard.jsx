import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Allproduct from './Allproduct'
import Home from './Home'
import Navbar from './Navbar'
import Page404 from './Page404'
import Productdetail from './Productdetail'

function Dashboard() {
  return (
    <div>
        <Navbar/>  
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products' element={<Allproduct />}>
                <Route path=':id' element={<Productdetail />}>
                    <Route path='notFound' element={<Page404 />} />
                    </Route>
            </Route>
        </Routes>
    </div>
  )
}
export default Dashboard