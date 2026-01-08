import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'

const Shop = () => {
  const [product, setProduct] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products')
      const data = await res.json()
      setProduct(data)
    } catch (error) {
      console.error("Error fetching products:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return ( 
    <div className="container mx-auto px-4 py-8  ">
      <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-blue-100">
        {product.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center hover:shadow-lg cursor-pointer hover:scale-105 "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold text-center mb-2">{item.title.length > 20 ? item.title.slice (0,20)+'...': item.title}</h2>
            <p className="text-600 font-bold">${item.price}</p>

            <div className='flex flew-row gap-20'>
       
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop
