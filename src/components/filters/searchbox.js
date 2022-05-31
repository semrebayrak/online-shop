import styled from "styled-components";
import FilterCSS from "../../css/filters/filters";
import { useState } from "react";

const SearchBox = ({ data, type }) => {
  const [value, setValue] = useState("");
  const [selectedFilter,setSelectedFilter] = useState();
 
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
          <FilterCSS.ListItem>
            <FilterCSS.CheckBoxSquared onSelect={() => setSelectedFilter("")} type="checkbox" id="checkbox" />

            <p>
              All <FilterCSS.ItemNumber>(18)</FilterCSS.ItemNumber>
            </p>
          </FilterCSS.ListItem>
          {data
            .filter((item) => (item.toLowerCase()).includes(value.toLowerCase()))
            ?.map((item, index) => {
              return (
                <FilterCSS.ListItem key={index}>
                  <FilterCSS.CheckBoxSquared onSelect={() => setSelectedFilter(item)} type="checkbox" id="checkbox" />

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
