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

  const { items, setItems } = useContext(ItemsContext);
  const [productTypes, setProductTypes] = useState(["mug", "shirt"]);
  const [selectedType, setSelectedType] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [allProducts, setAllProducts] = useState();
  const [productsOnPage, setProductsOnPage] = useState();

  const [totalCount, setTotalCount] = useState(items.length);

  useEffect(() => {
    if (selectedType != null) {
      // burayı sadeleştirip if else i filterdan önce koymayı dene
      let tempItems = items.filter(
        (item) => item.itemType == productTypes[selectedType]
      );
      setProductsOnPage(
        tempItems.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      );
      setTotalCount(tempItems.length);
    } else {
      setProductsOnPage(
        items.slice((currentPage - 1) * pageSize, currentPage * pageSize)
      );
      setTotalCount(items?.length);
    }
  }, [currentPage, items, selectedType]);

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ProductCSS.ProductsContainer>
      Products
      <ProductTypesCSS.Container>
        {productTypes.map((type, index) => (
          <ProductTypeButton
            key={index}
            type={type}
            index={index}
            setSelectedType={setSelectedType}
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
