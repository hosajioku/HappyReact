import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AboutPage from './AboutPage'

const Homepage = () => {
    const[data, setData]=useState([])
    const navigation= useNavigate()

    const fetchItems = async()=>{
        const res =await fetch('https://fakestoreapi.com/products')
        const result =await res.json()
        setData(result)
    }

   
    useEffect (()=>{
        fetchItems()
    })

  return (
    <div>
    <div className='flex flex-row h-screen sm-flex-col justify-center items-center shadow hover:shadow-lg transition-all'>
        <div className='h-[100%]  w-[50%] flex flex-col m-4 justify-center items-center '>
            
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Afromart!
        </h1>
        <p className="text-gray-600 text-lg">
          Discover amazing products at unbeatable prices. Your one-stop shop for fashion, electronics, and jewelry!
        </p>
      
            
 
           
        </div>
        <div className='h-[100%] w-[50%] flex justify-center items-center object-contain'>
    "
            <img className='' src="https://images.unsplash.com/photo-1713947506242-8fcae733d158?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
           
        </div>
    </div>
    <div className='max-w-6x1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6'>
        {data.map((item)=>{
            return(
                <div onClick={()=>navigation('/aboutPage', {state:item})} className='flex flex-col
                 justify-center items-center shadow hover:shadow-lg' key={item.idex}>

                    <img className='object-contain h-40 mb-6' src={item.image} alt="item.title" />
                    <p className='text-center'>{item.title}</p>
                    <button className='bg-blue-500 text-white w-15 rounded'>Add</button>
                </div>
            )
        })}
    </div>
    </div>
  )
}

export default Homepage