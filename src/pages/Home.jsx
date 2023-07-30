import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HomePage = ({products}) => {
    
    return (
        <div>HomePage
            {products.map((item,index)=>{
                return(
                    <div key={index+1}>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <Link to="/detail/1"><button>Detail</button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage;