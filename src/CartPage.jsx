import { useCart } from "./CartContext";
import CommonButton from "./CommonButton";
import { toast } from "react-toastify";
import CartData from './CartData.json'
function CartPage() {
  const {
    cartItems,
    remove,
    addToCart,
    RemoveFromCart,
    cartCount,
    roundedTotal,
  } = useCart();

  if (cartItems.length === 0) {
    return <p className="p-4 text-lg">Your cart is empty!!!!!!!!!!!!</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full border-collapse bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr >
           {CartData.map((h,i) => (<th key={i} className="p-3 text-center">{h.heading}</th>))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              <td className="p-3">
                <img
                  src={item.image}
                  alt={item.title || item.Productname}
                  className="h-32 object-contain mx-auto"
                />
              </td>
              <td className="p-3">
                <h3>{item.title || item.Productname}</h3>
              </td>
              <td className="p-3 font-semibold text-lg">₹{item.price}</td>

              <td className="p-3 font-semibold text-lg">
                <div className="flex items-center space-x-4">
                  <CommonButton
                    onClick={() => RemoveFromCart(item)}
                    className="px-2  bg-green-600 text-white rounded hover:bg-blue-700"
                    label="-"
                  ></CommonButton>
                  <span>{item.quantity}</span>
                  <CommonButton
                    onClick={() => addToCart(item)}
                    className=" px-2  bg-green-600 text-white rounded hover:bg-blue-700"
                    label="+"
                  ></CommonButton>
                </div>
              </td>
              <td className="p-3 font-semibold text-lg">
                ₹{item.price * item.quantity}
              </td>

              <td className="p-3 ">
                <CommonButton
                  type="button"
                  label="Remove"
                  onClick={() => {
                    remove(item);
                    toast.warn("Product Removed From Cart")
                  }}
                  
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
                />
             
             </td>
             <td className="p-2">
                <CommonButton
                  type="submit"
                  label="Checkout"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3"></td>
            <td className="p-5 font-semibold ">🛒 Total Items: {cartCount}</td>
            <td className="p-2 font-semibold">Grand Total: ₹{roundedTotal}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
export default CartPage;
