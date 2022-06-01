import { useContext } from "react";
import { useEffect, useState } from "react";
import CompaniesContext from "../../context/companiescontext";
import ItemsContext from "../../context/itemscontext";
import FilterCSS from "../../css/filters/filters";

const SearchBoxListItem = ({ item, type,index }) => {
  const [counter, setCounter] = useState(0);
  const {
    productsToDisplay,
    selectedBrands,
    setSelectedBrands,
    selectedTags,
    setSelectedTags,
  } = useContext(ItemsContext);

  const { companies } = useContext(CompaniesContext);
  const handleCheck = (e) => {
    let checked = e.currentTarget.checked;

    if (checked) {
      if (type === "Brands") {
        setSelectedBrands([...selectedBrands, item]);
      } else if (type === "Tags") {
        setSelectedTags([...selectedTags,item]);
      }
    } else {
      if (type === "Brands") {
        setSelectedBrands(
          selectedBrands.filter((brand) => brand !== item)
        );
      } else if (type === "Tags") {
        setSelectedTags(selectedTags.filter((tag) => tag !== item));
      }
    }

    return checked
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
            companies?.find((company) => company.name === item)?.slug
        ).length
      );
    } else if (type === "Tags") {
      setCounter(productsToDisplay.filter((product) => product.tags.includes(item)).length);
    }
  }
  useEffect(() => {
    countItem();
    
  }, [productsToDisplay,companies,item,type]);
  if(counter>0)
  return (
    <FilterCSS.ListItem>
      <FilterCSS.CheckBoxSquared
        type="checkbox"
        onChange={handleCheck}
        value={item}
      />
      <FilterCSS.ListItemName>
        {item} <FilterCSS.ItemNumber data-testid={type + "-count-" + index }>({counter})</FilterCSS.ItemNumber>
      </FilterCSS.ListItemName>
    </FilterCSS.ListItem>
  );
};

export default SearchBoxListItem;
