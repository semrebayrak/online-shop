import React, { useState, createContext, useEffect, useCallback } from "react";
import { useContext } from "react";
import CompaniesContext from "./companiescontext";

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const { companies } = useContext(CompaniesContext);

  const [items, setItems] = useState();
  const [itemsLoading, setItemsLoading] = useState(true);
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [productTypes, setProductTypes] = useState(["mug", "shirt"]);
  const [selectedType, setSelectedType] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const filterProducts = useCallback(() => {
    if (selectedType) {
      setProductsToDisplay(
        items.filter((item) => item.itemType === productTypes[selectedType])
      );
    } else {
      setProductsToDisplay(items);
    }

    if (selectedTags.length > 0 && !selectedTags.includes("All Tags")) {
      setProductsToDisplay((prev) =>
        prev.filter((item) =>
          selectedTags.every((tag) => item.tags.includes(tag))
        )
      );
    }

    if (selectedBrands.length > 0 && !selectedBrands.includes("All Brands")) {
      setProductsToDisplay((prev) =>
        prev.filter((item) =>
          selectedBrands.every(
            (brand) =>
              companies.find((company) => company.name === brand).slug ===
              item.manufacturer
          )
        )
      );
    }
  }, [
    selectedTags,
    selectedBrands,
    selectedType,
    companies,
    items,
    productTypes,
  ]);

  const fetchItems = async () => {
    await fetch("http://localhost:8000/items")
      .then((res) => res.json())
      .then((result) => setItems(result));
  };

  const calculateProductTypes = useCallback(() => {
    if (items) {
      let itemTypes = [];

      items.forEach((item) => {
        if (!itemTypes.includes(item.itemType)) {
          itemTypes.push(item.itemType);
        }
      });
      setProductTypes(itemTypes); 
    }
  }, [items]);
  useEffect(() => {
    if (items == null) fetchItems();
    else setItemsLoading(false);
    calculateProductTypes();
    filterProducts();
  }, [items, selectedType, selectedBrands, selectedTags]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        itemsLoading,
        setItems,
        productsToDisplay,
        selectedType,
        productTypes,
        setSelectedType,
        selectedBrands,
        setSelectedBrands,
        selectedTags,
        setSelectedTags,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsContext;
