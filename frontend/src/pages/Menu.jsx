// src/pages/Menu.jsx
import menuimage from "../assets/menubg.jpg";
import menuData from "../data/menuData";
import { useCart } from "../context/CartContext";
import { ShoppingCart, Plus } from "lucide-react";

function Menu() {
  const { addToCart, getTotalItems } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    // Optional: Show a toast notification
    alert(`${item.name} added to cart!`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${menuimage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "top center"
      }}
      className="w-full pt-[70px] min-h-screen"
    >
      {/* Cart Indicator */}
      <div className="fixed top-20 right-4 z-50 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
        <ShoppingCart size={20} />
        <span className="font-bold">{getTotalItems()}</span>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">Our Menu</h1>
        <h2 className="text-2xl font-semibold text-white mb-6">Main Course</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {menuData.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-2">{item.description}</p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-lg text-yellow-500">₹{item.price}</p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                    title="Add to Cart"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;