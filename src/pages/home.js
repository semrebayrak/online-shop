import { Fragment, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Basket from "../components/basket/basket";
import SearchBox from "../components/filters/searchbox";
import SortingBox from "../components/filters/sortingbox";
import Products from "../components/products/products";
import ProductTypeButton from "../components/products/producttypebutton";
import { ProductCSS, ProductTypesCSS } from "../css/product/product";
import SingleProduct from "../components/products/singleproduct";
import CompaniesContext from "../context/companiescontext";
import ItemsContext from "../context/itemscontext";
import Header from "../components/basiccomponents/header";



const Home = () => {
  const { items, itemsLoading } = useContext(ItemsContext);
  const { companies, companiesLoading } = useContext(CompaniesContext);
  const [tags, setTags] = useState([]);

  const prepareTags = () => {
    let tags = [];
    items?.forEach((item) => {
      item.tags.forEach((element) => {
        if (!tags.includes(element)) {
          tags.push(element);
        }
      });
    });
    setTags(tags);
  };

  useEffect(() => {
    prepareTags();
  }, [items]);

  if (!itemsLoading && !companiesLoading) {
    return (
      <Fragment>
        <Header />

        <SortingBox type="Sorting" />
        <SearchBox type="Brands" data={companies.map((item) => item.name)} />
        <SearchBox type="Tags" data={tags} />


        
        <Products/>
        <Basket />
      </Fragment>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Home;
