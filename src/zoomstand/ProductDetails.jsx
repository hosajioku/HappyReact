import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCartStore } from '../../Store';
import { ArrowLeft } from "lucide-react";


const ProductDetails = () => {
  const navigate = useNavigate();

      const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const addItem = useCartStore((s) => s.addItem);
  const removeItem = useCartStore((s) => s.removeItem);
  const items = useCartStore((s) => s.items);

  const inCart = items[id] ? true : false;

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <div>
      <div className="max-w-4xl mx-auto p-4">
  <button
    onClick={() => navigate(-1)}
    className="flex items-center gap-2 mb-4 text-[#1E2838] hover:text-indigo-600"
  >
    <ArrowLeft size={22} />
    <span className="font-semibold">Back</span>
  </button>
</div>
      
     <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain rounded-lg shadow"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-500 mb-4">{product.category}</p>
        <p className="text-lg font-semibold mb-4">${product.price}</p>
        <p className="text-gray-700 mb-4">{product.description}</p>

        <button
          onClick={() =>
            inCart ? removeItem(product.id) : addItem(product, 1)
          }
          className={`px-4 py-2 rounded-lg text-white ${
            inCart ? "bg-red-600 hover:bg-red-700 " : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {inCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
    </div>

 
  )
}

export default ProductDetails