// import React from 'react'
// import {useCardStore} from '../store'
// // import { useCartStore } from '../store/cartStore'

// export default function ProductItem({ product }) {
//   const addItem = useCartStore((s) => s.addItem)

//   return (
//     <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
//       <img
//         src={product.image}
//         alt={product.title}
//         className="rounded-lg w-full h-48 object-cover"
//       />
//       <h3 className="mt-3 text-lg font-semibold line-clamp-1">{product.title}</h3>
//       <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>

//       <div className="mt-auto flex justify-between items-center pt-3">
//         <span className="text-lg font-bold">${product.price}</span>
//         <button
//           onClick={() => addItem(product, 1)}
//           className="px-3 py-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 active:scale-95 transition-transform"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   )
// }

import React from 'react'
import { useCartStore } from '../../Store'
import { Link } from 'react-router-dom';


const ProductItem = ({product}) => {
  
  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem); 
  const items = useCartStore((s) => s.items);
  const inCart = items[product.id] ? true : false;

  return (
 <div className="bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300 p-4 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="rounded-lg w-full h-48 object-contain mb-2"
        />
      </Link>

      <h3 className="mt-1 text-lg font-semibold line-clamp-1">{product.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description}</p>

      <div className="mt-auto flex justify-between items-center pt-3">
        <span className="text-lg font-bold">${product.price}</span>
        <button
          onClick={() =>
            inCart ? removeItem(product.id) : addItem(product, 1)
          }
          className={`px-3 py-1.5 rounded-lg text-white ${
            inCart ? "bg-red-600 hover:bg-red-700" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {inCart ? "Remove from Cart" : "Add"}
        </button>
      </div>
    </div>
  )
}

export default ProductItem