import FilterCSS from "../../css/filters/filters";
import { useState } from "react";
import SearchBoxListItem from "./searchboxlistitem";

const SearchBox = ({ data, type }) => {
  const [value, setValue] = useState("");

  data = ["All", ...data];

  
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
          {data.length >0 && data
            .filter((item) => item.toLowerCase().includes(value.toLowerCase()))
            ?.map((item, index) => {
              return <SearchBoxListItem type={type} item={item} index={index} key={index} />;
            })}
        </FilterCSS.Ul>
      </FilterCSS.Rectangle>
    </FilterCSS.FilterContainer>
  );
};
export default SearchBox;
