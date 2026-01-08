import React from 'react'
import { useLocation } from 'react-router-dom'

const AboutPage = () => {
    const {state} = useLocation()
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='max-w-4xl mx-auto rounded-xl shadow hover:shadow-lg transition-all 
        duration-300 bg-white p-4 flex items-center gap-6'
        >

            <img className='w-60 h-80 object-center rounded-lg ' src={state.image} alt="" 
            />

            <div className='flex flex-col justify-center items-center'>
                <h3 className='font-semibold line-clamp-1 mt-2 text-lg'>{state.title}</h3>
                <p className='m-2 text-gray-500'>{state.description}</p>
                <span className='text-lg font-bold'>${state.price}</span>
            </div>
        </div>
    </div>
  )
}

export default AboutPage