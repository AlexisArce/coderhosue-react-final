import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    const index = cartList.findIndex((i) => i.id === item.id);

    if (index > -1) {
      const oldQy = cartList[index].quantity;

      cartList.splice(index, 1);

      setCartList([...cartList, { ...item, quantity: item.quantity + oldQy }]);
    } else {
      setCartList([...cartList, item]);
    }
  }

  function removeItem(id) {
    setCartList(cartList.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCartList([]);
  }

  function getTotalItems() {
    let totalItems = 0;

    cartList.forEach((item) => {
      totalItems += item.quantity;
    });

    return totalItems;
  }

  function getTotalAmount() {
    return roundTwoDecimals(
      cartList.reduce((acum, prod) => acum + prod.quantity * prod.price, 0)
    );
  }

  function roundTwoDecimals(value) {
    return Math.round((value + Number.EPSILON) * 100) / 100;
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        removeItem,
        clearCart,
        getTotalItems,
        getTotalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
