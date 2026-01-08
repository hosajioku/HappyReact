import React from 'react'
import { useCartStore } from '../../Store'

const CartButton = () => {

      const toggleOpen = useCartStore((s) => s.toggleOpen)
  const getTotalCount = useCartStore((s) => s.getTotalCount())

  return (
    <button
      onClick={() => toggleOpen(true)}
      className="relative px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
    >
      Cart
      {getTotalCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {getTotalCount}
        </span>
      )}
    </button>
  )
}

export default CartButton