import { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import CompaniesContext from "../../context/companiescontext";
import ItemsContext from "../../context/itemscontext";
import FilterCSS from "../../css/filters/filters";

const SearchBoxListItem = ({ item, type, index }) => {
  const [counter, setCounter] = useState(0);
  const {
    items,
    productsToDisplay,
    setSelectedBrands,
    setSelectedTags,
    selectedTags,
    selectedBrands,
  } = useContext(ItemsContext);

  const [checked, setChecked] = useState(false);
  const { companies } = useContext(CompaniesContext);

  const handleCheck = () => {
    if (type === "Brands" && item === "All") {
      setSelectedBrands(["All Brands"]);
      return
    } else if (type === "Tags" && item === "All") {
      setSelectedTags(["All Tags"]);
      return
    }

    if(type==="Tags" && selectedTags.includes("All Tags")){
      setSelectedTags([])
    }
    else if(type==="Brands" && selectedBrands.includes("All Brands")){
      setSelectedBrands([])
    }


    if (selectedTags.includes(item) || selectedBrands.includes(item)) {
      if (type === "Brands") {
        setSelectedBrands((prev) => prev.filter((brand) => brand !== item));
      } else if (type === "Tags") {
        setSelectedTags((prev) => prev.filter((tag) => tag !== item));
      }
    } else {
      if (type === "Brands") {
        setSelectedBrands((prev) => [...prev, item]);
      } else if (type === "Tags") {
        setSelectedTags((prev) => [...prev, item]);
      }
    }
  };
  const countItem = () => {
    if (item === "All") {
      setCounter(productsToDisplay.length);
      return;
    }
    if (type === "Brands") {
      setCounter(
        productsToDisplay.filter(
          (product) =>
            product.manufacturer ===
            companies.find((company) => company.name === item).slug
        ).length
      );
    } else if (type === "Tags") {
      setCounter(
        productsToDisplay.filter((product) => product.tags.includes(item))
          .length
      );
    }
  };
  useEffect(() => {
    countItem();
  }, [companies, item, type, countItem, checked]);
  if (
    counter > 0 ||
    selectedTags.includes(item) ||
    selectedBrands.includes(item)
  )
    return (
      <FilterCSS.ListItem>
        <FilterCSS.CheckBoxSquared
          type="checkbox"
          onChange={handleCheck}
          value={item}
          checked={
            item === "All" ?  ( type=="Tags" ? selectedTags.includes("All Tags") : selectedBrands.includes("All Brands"))
              
              : selectedTags.includes(item) || selectedBrands.includes(item)
          }
        />
        <FilterCSS.ListItemName>
          {item}{" "}
          <FilterCSS.ItemNumber data-testid={type + "-count-" + index}>
            ({item === "All" ? items.length : counter})
          </FilterCSS.ItemNumber>
        </FilterCSS.ListItemName>
      </FilterCSS.ListItem>
    );
};

export default SearchBoxListItem;
