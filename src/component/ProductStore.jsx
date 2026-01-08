import React, { use, useEffect, useState } from 'react'
import './Home.css'
import Loading from '../component/Loading'
import Lottie from "lottie-react";
import loading_gray from "../assets/loading_gray.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Header from '../component/Header'

const Home = () => {

    const NextArrow = ({ onClick }) => (
  <div className="arrow next arrow-animate" onClick={onClick}>
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev arrow-animate" onClick={onClick}>
    &#10094;
  </div>
);

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
    

    const [product,setProduct]=useState([])
    const [load, setLoad]=useState(false)

    const fetchData = async()=>{
        const res =await fetch('https://fakestoreapi.com/products')
        const res2 =await res.json()
        setProduct(res2)
    }

    useEffect (()=>{
        setTimeout(()=>{
            setLoad(true)
         fetchData()
         
        }, 3000)
    },[])

    
console.log(product)
  return (
    <div>
    
     <div  className={load===false?'load-img':"none"}>

            <Lottie animationData={loading_gray} loop={true} />
            <p className="loading-text">Please wait… Loading data</p>;
        </div>

        <div className='container'>
            <Slider {...settings}>
        {product.map((item,index)=>{
            return(
                <div className={load ? "slide-animate" : ""} key={index}>
                 <Loading items={item}/>
                 </div>
                
            )
        })}
        </Slider>
    </div> 

    </div>
    
  )
}

export default Home