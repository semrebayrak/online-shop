import { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import CompaniesContext from "../../context/companiescontext";
import ItemsContext from "../../context/itemscontext";
import FilterCSS from "../../css/filters/filters";

const SearchBoxListItem = ({ item, type, index }) => {
  const [counter, setCounter] = useState(0);
  const {items, productsToDisplay, setSelectedBrands, setSelectedTags } =
    useContext(ItemsContext);

  const [checked, setChecked] = useState(false);
  const { companies } = useContext(CompaniesContext);

  const handleCheck = () => {
    if (checked) {
      if (type === "Brands") {
        setSelectedBrands((prev) => [...prev, item]);
      } else if (type === "Tags") {
        setSelectedTags((prev) => [...prev, item]);
      }
    } else {
      if (type === "Brands") {
        setSelectedBrands((prev) => prev.filter((brand) => brand !== item));
      } else if (type === "Tags") {
        setSelectedTags((prev) => prev.filter((tag) => tag !== item));
      }
    }
  };

  const countItem = useCallback(() => {
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
  }, [productsToDisplay,item, companies, type]);
  useEffect(() => {
    countItem();
    handleCheck();
  }, [companies, item, type, countItem, checked]);
  if (counter > 0)
    return (
      <FilterCSS.ListItem>
        <FilterCSS.CheckBoxSquared
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
          value={item}
          checked={checked}
        />
        <FilterCSS.ListItemName>
          {item}{" "}
          <FilterCSS.ItemNumber data-testid={type + "-count-" + index}>
            ({item === "All" ? items.length :counter})
          </FilterCSS.ItemNumber>
        </FilterCSS.ListItemName>
      </FilterCSS.ListItem>
    );
};

export default SearchBoxListItem;
