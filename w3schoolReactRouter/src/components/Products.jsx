import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Products = () => {
   return (
    <div>
      <h1>Products Page</h1>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/products/cars">Cars</Link> |{" "}
        <Link to="/products/bikes">Bikes</Link>
      </nav> 
      <Outlet /> 
    </div>
  );
}
