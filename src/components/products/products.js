import ProductTypeButton from "../../components/products/producttypebutton";
import {
  ProductCSS,
  ProductTypesCSS,
  ProductPaginationCSS,
} from "../../css/product/product";
import SingleProduct from "../../components/products/singleproduct";
import { useContext, useEffect, useState } from "react";
import { usePagination } from "../../hooks/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ItemsContext from "../../context/itemscontext";

export const Products = () => {
  const pageSize = 16;
  const siblingCount = 3;

  const {
    items,
    productsToDisplay,
    productTypes,
    selectedType,
    setSelectedType,
  } = useContext(ItemsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsOnPage, setProductsOnPage] = useState();
  const [totalCount, setTotalCount] = useState(items.length);

  useEffect(() => {
    if (productsToDisplay) { 
      setProductsOnPage(
        productsToDisplay.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )
      );

      setTotalCount(productsToDisplay.length);
    }
  }, [currentPage, productsToDisplay]);

  const changeSelectedType = (value) => {
    setCurrentPage(1);
    setSelectedType(value);
  };
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  let lastPage = paginationRange[paginationRange.length - 1];

  const onNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <ProductCSS.ProductsContainer>
      Products
      <ProductTypesCSS.Container>
        {productTypes.map((type, index) => (
          <ProductTypeButton
            key={index}
            type={type}
            index={index}
            changeSelectedType={changeSelectedType}
            clicked={selectedType === index}
          />
        ))}
      </ProductTypesCSS.Container>
      <ProductCSS.ProductsList>
        {productsOnPage?.map((product, index) => (
          <SingleProduct key={index} product={product} />
        ))}
      </ProductCSS.ProductsList>
      <ProductPaginationCSS.Container>
        <ProductPaginationCSS.PageDirection onClick={onPrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
          Prev
        </ProductPaginationCSS.PageDirection>
        {paginationRange.map((page, index) => (
          <ProductPaginationCSS.PageButton
            key={page}
            onClick={() => setCurrentPage(page)}
            active={page === currentPage}
          >
            {page}
          </ProductPaginationCSS.PageButton>
        ))}
        <ProductPaginationCSS.PageDirection onClick={onNext}>
          Next
          <FontAwesomeIcon icon={faArrowRight} />
        </ProductPaginationCSS.PageDirection>
      </ProductPaginationCSS.Container>
    </ProductCSS.ProductsContainer>
  );
};

export default Products;
