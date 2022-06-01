import { Fragment, useContext, useEffect, useState } from "react";
import Basket from "../components/basket/basket";
import SearchBox from "../components/filters/searchbox";
import SortingBox from "../components/filters/sortingbox";
import Products from "../components/products/products";
import CompaniesContext from "../context/companiescontext";
import ItemsContext from "../context/itemscontext";
import Header from "../components/basiccomponents/header";
import FilterCSS from "../css/filters/filters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useCallback } from "react";
import { Footer } from "../components/basiccomponents/footer";
import { Content } from "../css/basiccomponents/basiccomponents";

const Home = () => {
  const { productsToDisplay, itemsLoading } = useContext(ItemsContext);
  const { companies, companiesLoading } = useContext(CompaniesContext);
  const [tags, setTags] = useState([]);
  const [hideSortBox, setHideSortBox] = useState(true);
  const prepareTags = useCallback(() => {
    let tags = [];
    productsToDisplay?.forEach((item) => {
      item.tags.forEach((element) => {
        if (!tags.includes(element)) {
          tags.push(element);
        }
      });
    });
    setTags(tags);
    return tags;
  }, [productsToDisplay]);

  useEffect(() => {
    prepareTags();
  }, [prepareTags]);

  if (!itemsLoading && !companiesLoading) {
    return (
      <Fragment>
        <Header />

        <Content.ContentContainer>
          <FilterCSS.Filters>
            <SortingBox
              absoluteOnMobile={true}
              setHideSortBox={setHideSortBox}
              hide={hideSortBox}
              type="Sorting"
            />
            <FilterCSS.SearchOptions>
              <SearchBox
                type="Brands"
                data={companies.map((item) => item.name)}
              />
              <SearchBox type="Tags" data={tags} />
            </FilterCSS.SearchOptions>
          </FilterCSS.Filters>

          <FilterCSS.SortButton
            data-testid="sort-by"
            onClick={() => setHideSortBox(!hideSortBox)}
          >
            Sort
            <FontAwesomeIcon icon={faSortDown} />
          </FilterCSS.SortButton>

          <Products />
          <Basket />
        </Content.ContentContainer>

        <Footer />
      </Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
