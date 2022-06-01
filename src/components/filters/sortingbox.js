import { useContext, useEffect, useState } from "react";
import ItemsContext from "../../context/itemscontext";
import FilterCSS from "../../css/filters/filters";

const SortingBox = ({ absoluteOnMobile,hide,setHideSortBox,type }) => {

  const {items,setItems} = useContext(ItemsContext);

  const sortingOptions = [
    "Price low to high",
    "Price high to low",
    "New to old",
    "Old to new",
  ];
  const [selectedIndex, setSelectedIndex] = useState();

  useEffect(() => {
    
    if(items){
      let tempArray = [...items];

    if(selectedIndex===0){ // Order by Price Low to High
      tempArray.sort((a, b) => a.price > b.price ? 1 : -1);

    }
    else if(selectedIndex===1){ // Order by Price High to Low
      tempArray.sort((a, b) => a.price < b.price ? 1 : -1);
    }
    else if(selectedIndex===2){ // Order by New to Old
      tempArray.sort((a, b) => a.added > b.added ? 1 : -1);

    }
    else if(selectedIndex===3){ // Order by Old to New
      tempArray.sort((a, b) => a.added < b.added ? 1 : -1);

    }
    setItems(tempArray)
    }

  }, [selectedIndex]);
  return (
    <FilterCSS.FilterContainer>
      
     <FilterCSS.TypeText hide={absoluteOnMobile}>{type}</FilterCSS.TypeText>
      <FilterCSS.Rectangle absoluteOnMobile={absoluteOnMobile} hide={hide}>
        <FilterCSS.Ul>
          {sortingOptions.map((option, index) => {
            return (
              <FilterCSS.ListItem key= {index}>
                <FilterCSS.CheckBoxRounded
                  checked={selectedIndex===index}
                  onChange={() => { setSelectedIndex(index); setHideSortBox(!hide)}}
                  type="checkbox"
                />

                <p>{option}</p>
              </FilterCSS.ListItem>
            );
          })}
        </FilterCSS.Ul>
      </FilterCSS.Rectangle>
    </FilterCSS.FilterContainer>
  );
};
export default SortingBox;
