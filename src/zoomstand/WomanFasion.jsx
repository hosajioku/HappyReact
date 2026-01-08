import React, { useEffect, useState } from 'react'
import ProductItem from '../component/ProductItem';

const WomanFasion = () => {
      const [products, setProducts] = useState([]); 
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null); 
    
      useEffect(() => {
        async function fetchProducts() {
          try {
            const res = await fetch("https://fakestoreapi.com/products/category/women's clothing");
            if (!res.ok) throw new Error("Failed to fetch products");
            const data = await res.json();
            setProducts(data);
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        }
        fetchProducts();
      }, []);
    
      if (loading) return <p className="text-center py-10">Loading products...</p>;
      if (error) return <p className="text-center text-red-500 py-10">{error}</p>;
  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductItem key={item.id} product={item} />
      ))}
    </div>
  )
}

export default WomanFasion