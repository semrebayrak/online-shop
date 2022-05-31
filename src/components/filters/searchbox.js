import styled from "styled-components";
import FilterCSS from "../../css/filters/filters";
import { useContext, useState } from "react";
import { useEffect } from "react";
import ItemsContext from "../../context/itemscontext";

const SearchBox = ({ data, type }) => {
  const [value, setValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState();
  const { selectedBrands, setSelectedBrands, selectedTags, setSelectedTags } =
    useContext(ItemsContext);


  data = ["All",...data]

  const handleCheck = (e) => {

    let checked = e.currentTarget.checked;


  
    if(checked){
      

      if(type==="Brands"){
        setSelectedBrands([...selectedBrands, e.target.value]);
      }
      else if(type==="Tags"){
        setSelectedTags([...selectedTags, e.target.value]);
      }
    }
    else{
      if(type==="Brands"){
        setSelectedBrands(selectedBrands.filter((item) => item !== e.target.value));
      }
      else if(type==="Tags"){
        setSelectedTags(selectedTags.filter((item) => item !== e.target.value));
      }
    }
   
   
  };

  return (
    <FilterCSS.FilterContainer>
      <FilterCSS.TypeText>{type}</FilterCSS.TypeText>
      <FilterCSS.Rectangle>
        <FilterCSS.InputTextBox
          type="text"
          placeholder={"Search " + type.slice(0, -1).toLowerCase()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <FilterCSS.Ul>
    
          {data
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            ?.map((item, index) => {
              return (
                <FilterCSS.ListItem key={index}>
                  <FilterCSS.CheckBoxSquared
                  
                    type="checkbox"
                    onChange={handleCheck}
                    value={item}
                  />

                  <p>
                    {item} <FilterCSS.ItemNumber>(18)</FilterCSS.ItemNumber>
                  </p>
                </FilterCSS.ListItem>
              );
            })}
        </FilterCSS.Ul>
      </FilterCSS.Rectangle>
    </FilterCSS.FilterContainer>
  );
};
export default SearchBox;
