import React, { useState } from 'react'
import { useCartStore } from '../../Store'
import { ArrowLeft } from 'lucide-react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

const CartDrawer = () => {

   const items = useCartStore((s) => s.items);
  const toggleOpen = useCartStore((s) => s.toggleOpen);
  const open = useCartStore((s) => s.open);
  const removeItem = useCartStore((s) => s.removeItem);
  const setQty = useCartStore((s) => s.setQty);
  const getTotalPrice = useCartStore((s) => s.getTotalPrice);

  const cartItems = Object.values(items);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Address: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    Address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error on change
    setErrors({ ...errors, [name]: "" });
  };

  const validateField = (name, value) => {
    let error = "";
    if (!value.trim()) {
      error = "This field is required!";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = "Invalid email address!";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  // const handlePayment = () => {
  //   // Validate all fields
  //   const isNameValid = validateField("name", formData.name);
  //   const isEmailValid = validateField("email", formData.email);
  //   const isAddressValid = validateField("Address", formData.Address);

  //   if (!isNameValid || !isEmailValid || !isAddressValid) {
  //     return; // stop if any field is invalid
  //   }

  //   console.log("Payment data", formData, cartItems);
  //   alert("Payment successful!");
  //   // window.location.href = "/payment"; // redirect to actual payment page
  // };

  const config = {
    public_key: 'FLWPUBK_TEST-a09fdeca812ee4a4718fabd5c192043e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'USD',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
       phone_number: '070****',
      name: 'john doe',
    },
    customizations: {
      title: 'my Payment Title',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
    


  return ( 
    <>
      {/* Background Overlay */}
      {open && (
        <div
          className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-black bg-opacity-40 z-30"
          onClick={() => toggleOpen(false)}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-16 right-0 h-[calc(100vh-64px)] w-[100vw] bg-white shadow-lg z-40 
          transform transition-transform duration-300 
          ${open ? "translate-x-0" : "translate-x-full"} 
          flex flex-col md:flex-row`}
      >
        {/* Back Arrow */}
        <div className="flex justify-start items-center p-4 border-b md:hidden">
          <button
            onClick={() => toggleOpen(false)}
            className="flex items-center gap-2 text-[#1E2838] hover:text-indigo-600"
          >
            <ArrowLeft size={22} />
            <span className="font-semibold">Back</span>
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center p-20 border-r overflow-y-auto">
          <h2 className="text-lg font-bold mb-4">Your Details</h2>

          <div className="w-[300px] mb-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="w-[300px] mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="w-[300px] mb-3">
            <textarea
              name="Address"
              placeholder="Address"
              value={formData.Address}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-full border px-3 py-2 rounded"
            />
            {errors.Address && <p className="text-red-500 text-sm mt-1">{errors.Address}</p>}
          </div>
        </div>

        {/* Cart */}
        <div className="flex-1 pl-4 pr-5 flex flex-col overflow-y-auto mt-4">
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>

          <div className="flex-1 overflow-y-auto space-y-4">
            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.product.id} className="flex items-center space-x-3">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold line-clamp-1">{item.product.title}</h3>
                    <p className="text-gray-500">${item.product.price}</p>
                    <div className="flex items-center mt-1 space-x-2">
                      <button
                        onClick={() => setQty(item.product.id, item.qty - 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        onClick={() => setQty(item.product.id, item.qty + 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-red-500 font-bold hover:text-red-700"
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-4">
              <div className="flex justify-between font-semibold mb-3">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
              <button
                onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
        
                className="bg-green-600 text-white py-2 w-full rounded-lg hover:bg-green-700"
              >
                Make Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CartDrawer