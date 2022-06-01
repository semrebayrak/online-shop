import { useContext } from "react";
import { useEffect, useState } from "react";
import CompaniesContext from "../../context/companiescontext";
import ItemsContext from "../../context/itemscontext";
import FilterCSS from "../../css/filters/filters";

const SearchBoxListItem = ({ item, type }) => {
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
        setSelectedBrands([...selectedBrands, e.target.value]);
      } else if (type === "Tags") {
        setSelectedTags([...selectedTags, e.target.value]);
      }
    } else {
      if (type === "Brands") {
        setSelectedBrands(
          selectedBrands.filter((item) => item !== e.target.value)
        );
      } else if (type === "Tags") {
        setSelectedTags(selectedTags.filter((item) => item !== e.target.value));
      }
    }
  };

  useEffect(() => {
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
        {item} <FilterCSS.ItemNumber>({counter})</FilterCSS.ItemNumber>
      </FilterCSS.ListItemName>
    </FilterCSS.ListItem>
  );
};

export default SearchBoxListItem;
