import React, { useState, createContext, useEffect } from "react";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState();
  const [itemsLoading, setItemsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      await fetch("http://localhost:8000/items")
        .then((res) => res.json())
        .then((result) => setItems(result));
    };
    if (items == null) fetchItems();
    else setItemsLoading(false);
  }, [items]);

  return (
    <ItemsContext.Provider value={{ items, itemsLoading,setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
