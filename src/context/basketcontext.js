import React, { useState, createContext, useEffect, useCallback } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState((JSON.parse(localStorage.getItem("basket"))) ?? []);
  const [totalAmount, setTotalAmount] = useState();
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const [basketLocal, setBasketLocal] = useState([]);

  useEffect(() => {
    let total = 0;


    if (basket.length > 0)
      basket?.forEach((item) => {
        total += item.price * item.quantity;
      });

    setTotalAmount("₺" + total.toFixed(2).replace(".", ","));

    localStorage.setItem("basket", JSON.stringify(basket));
    setBasketLocal(
      localStorage.getItem("basket")
        ? JSON.parse(localStorage.getItem("basket"))
        : []
    );
  }, [basket]);

  return (
    <BasketContext.Provider
      value={{
        basketLocal,
        basket,
        setBasket,
        totalAmount,
        mobileDisplay,
        setMobileDisplay,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
