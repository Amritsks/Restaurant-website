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
        backgroundPosition: "top center",
      }}
      className="w-full pt-[70px] min-h-screen"
    >
      {/* Cart Indicator */}
      <div className="fixed top-[80px] right-4 z-50 bg-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg flex items-center gap-2 text-sm sm:text-base">
        <ShoppingCart size={18} className="sm:size-20" />
        <span className="font-semibold">{getTotalItems()}</span>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10 text-white drop-shadow-md">
          Our Menu
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6">Main Course</h2>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {menuData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-[1.03] transform transition duration-300 relative"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 sm:h-48 md:h-52 object-cover"
              />
              <div className="p-3 sm:p-4">
                <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 truncate">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-2 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-base sm:text-lg text-yellow-500">
                    ₹{item.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 text-white p-1.5 sm:p-2 rounded-full hover:bg-green-600 transition-colors"
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
