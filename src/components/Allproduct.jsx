import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom'

function Allproduct() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/product')
            .then((r) => r.json())
            .then((d) => {
                setData(d);
            })
    }, []);
   console.log(data)
  return (
    <div>

        {data.map((e) => {
            return( 
                <div>
                    <li>Product Name: {e.name}</li>
                    <li>Price: {e.price}</li>
                    <Link to= '/products/:id'> Prodct Details</Link> 
                </div>  
            )
        })}
        <Outlet />  
    </div>
  )
}
export default Allproduct

 