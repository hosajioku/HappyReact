import React,{useState} from 'react'

const Nav = () => {

  const [showCategories, setShowCategories] = useState(false);
    
  const categories = ["Phones", "Electronics", "Clothes", "Accessories", "Home Appliances", 
        "Computers", "Shoes", "Beauty", "Kids", "Sports"];


  return (
  
<nav className="w-full bg-white shadow-md p-3 md:p-4 flex items-center justify-between gap-3 flex-wrap">
<h1 className="text-x1 md:text-5xl font-bold text-blue-600">Afromart</h1>


<div className="relative flex-grow max-w-xl w-full">
<div className="flex items-center border border-gray-300 bg-white rounded-lg overflow-hidden">
<button
onClick={() => setShowCategories(!showCategories)}
className="px-3 py-2 border-r border-gray-300 text-sm md:text-base whitespace-nowrap"
>
All Categories ▼
</button>
<input
type="text"
placeholder="Search for products, brands..."
className="flex-grow px-3 py-2 text-sm md:text-base focus:outline-none"
/>
<button className="px-3 py-2 bg-blue-600 text-white text-lg">🔍</button>
</div>


{showCategories && (
<ul className="absolute left-0 w-40 bg-white border shadow-md mt-1 rounded z-10">
{categories.map((cat, i) => (
<li key={i} className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm">
{cat}
</li>
))}
</ul>
)}
</div>


<div className="flex items-center gap-4 text-sm md:text-base font-medium mt-2 md:mt-0">
<a href="#" className="hover:text-blue-600">Home</a>
<a href="#" className="hover:text-blue-600">About</a>
<a href="#" className="hover:text-blue-600">Shop</a>
<a href="#" className="hover:text-blue-600">Checkout</a>
</div>


<div className="flex items-center gap-4 mt-2 md:mt-0">
<button className="text-xl">❤️</button>
<button className="text-xl">🛒</button>
</div>
</nav>
  
  )
}

export default Nav