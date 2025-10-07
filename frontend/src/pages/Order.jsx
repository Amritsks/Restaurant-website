import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, MapPin, Clock } from "lucide-react";

function Order() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India"
  });

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  const handleSubmitOrder = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        customerName: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        deliveryAddress,
        items: items.map(item => ({
          name: item.name,
          price: parseFloat(item.price),
          quantity: item.quantity,
          image: item.image
        })),
        totalAmount: getTotalPrice()
      };

      const response = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to place order");
      }

      setOrderDetails(data);
      setOrderPlaced(true);
      clearCart();
      
    } catch (err) {
      console.error("Error placing order:", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderPlaced && orderDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 pt-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-green-500 text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Placed Successfully!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for your order. We're preparing your food with love! ❤️
          </p>
          
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <p className="text-sm text-gray-600">Order ID</p>
            <p className="font-mono font-bold text-lg">{orderDetails.orderId}</p>
            
            <div className="flex items-center justify-center gap-2 mt-4 text-blue-600">
              <Clock size={20} />
              <p>Estimated Delivery: {new Date(orderDetails.estimatedDelivery).toLocaleTimeString()}</p>
            </div>
          </div>

          <button
            onClick={() => setOrderPlaced(false)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 flex items-center justify-center gap-3">
          <ShoppingBag className="text-orange-500" />
          Your Order
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <p className="text-gray-500">Add some delicious items from our menu!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-yellow-600 font-bold">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="font-bold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t mt-6 pt-4">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-green-600">₹{getTotalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <MapPin className="text-blue-500" />
                Delivery Information
              </h2>

              <form onSubmit={handleSubmitOrder} className="space-y-6">
                {/* Customer Info */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Your Details</h3>
                  
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Delivery Address */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-700">Delivery Address</h3>
                  
                  <input
                    type="text"
                    placeholder="Street Address *"
                    value={deliveryAddress.street}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, street: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City *"
                      value={deliveryAddress.city}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, city: e.target.value})}
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    <input
                      type="text"
                      placeholder="State *"
                      value={deliveryAddress.state}
                      onChange={(e) => setDeliveryAddress({...deliveryAddress, state: e.target.value})}
                      required
                      className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="ZIP Code *"
                    value={deliveryAddress.zipCode}
                    onChange={(e) => setDeliveryAddress({...deliveryAddress, zipCode: e.target.value})}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-lg hover:from-orange-600 hover:to-orange-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 font-bold text-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Placing Order...
                    </span>
                  ) : (
                    `Place Order - ₹${getTotalPrice().toFixed(2)}`
                  )}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;