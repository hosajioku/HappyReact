// import React from 'react'
// import ProductList from '../component/ProductList'


// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <h2 className="text-2xl font-bold text-center py-6">🛍️ Shop Products</h2>
//       <ProductList/>
//     </div>
//   )
// }
import React from 'react'
import ProductList from '../component/ProductList'
import CartDrawer from '../component/CartDrawer'
// import Narbar from '../component/Narbar'
import Fashion from './MensFashion/'
import WomanFasion from './WomanFasion'
import Electronics from './Electronics'
import Jewelery from './Jewelery'
import ProductDetails from './ProductDetails'
import Hero from '../component/Hero'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero/>
       <ProductList/>

       <CartDrawer/>
       
      
     </div>
  )
}

export default Home
