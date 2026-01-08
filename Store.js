// src/store/cartStore.js
// Simple Zustand cart store with localStorage persistence.
// Usage: import { useCartStore } from '../store/cartStore'

import {create} from 'zustand'
import { persist } from 'zustand/middleware'
/*
  Store shape:
  {
    items: { [productId]: { product, qty } },
    open: boolean, // for cart drawer UI
    addItem(product, qty = 1),
    removeItem(productId),
    setQty(productId, qty),
    clearCart(),
    toggleOpen(value?), // open/close cart
    getTotalCount(), // returns total items (sum qty)
    getTotalPrice()  // returns total price (sum price * qty)
  }
*/

export const useCartStore = create(
  persist(
    (set, get) => ({
      // state
      items: {},   // items keyed by product.id
      open: false, // UI flag for cart drawer

      // actions
      addItem: (product, qty = 1) => {
        if (!product || !product.id) return
        const items = { ...get().items }
        const existing = items[product.id]
        if (existing) {
          items[product.id] = { product, qty: existing.qty + qty }
        } else {
          items[product.id] = { product, qty }
        }
        set({ items })
      },

      removeItem: (productId) => {
        const items = { ...get().items }
        if (!items[productId]) return
        delete items[productId]
        set({ items })
      },

      setQty: (productId, qty) => {
        const items = { ...get().items }
        if (!items[productId]) return
        if (qty <= 0) {
          // remove when qty is zero or negative
          delete items[productId]
        } else {
          items[productId] = { ...items[productId], qty }
        }
        set({ items })
      },

      clearCart: () => set({ items: {} }),

      toggleOpen: (value) =>
        set((state) => ({ open: typeof value === 'boolean' ? value : !state.open })),

      // selectors/helpers (can be called from components)
      getTotalCount: () =>
        Object.values(get().items).reduce((sum, it) => sum + it.qty, 0),

      getTotalPrice: () =>
        Object.values(get().items).reduce((sum, it) => sum + it.qty * (it.product.price || 0), 0),
    }),
    {
      name: 'cart-storage-v1', // key in localStorage
      // Optionally customize how state is persisted:
      // serialize: (state) => JSON.stringify(state),
      // deserialize: (str) => JSON.parse(str),
      // partialize: (state) => ({ items: state.items }) // only persist items
      partialize: (state) => ({ items: state.items }) // persist only the cart items (not UI flags)
    }
  )
)







// Quick explanation (read in 30 seconds)

// items is an object keyed by product.id. Each entry: { product, qty }.

// addItem(product, qty) adds or increments a product.

// setQty(productId, qty) sets quantity (if <=0 it removes the item).

// removeItem(productId) deletes that product.

// clearCart() empties the cart.

// toggleOpen() toggles a UI flag you can use for showing a cart drawer.

// getTotalCount() and getTotalPrice() return totals calculated from items.

// persist middleware saves the items to localStorage under the key cart-storage-v1.