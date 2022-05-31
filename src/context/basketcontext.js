import React, { useState, createContext, useEffect } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  useEffect(() => {
    let total = 0;
    basket?.forEach((item) => {
      total+= item.price * item.quantity;
    })

    setTotalAmount("₺" + total.toFixed(2).replace(".",","));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ basket, setBasket, totalAmount }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketContext;
