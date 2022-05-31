import { useContext } from "react";
import { Fragment } from "react";
import ItemsContext from "../../context/itemscontext";
import { ProductTypesCSS } from "../../css/product/product";

const ProductTypeButton = ({ type, clicked, changeSelectedType, index }) => {
  const handleClick = () => {
    if (clicked == true) changeSelectedType();
    else changeSelectedType(index);
  };

  return (
    <Fragment>
      <ProductTypesCSS.ButtonClicked active={clicked} onClick={handleClick}>
        {type}
      </ProductTypesCSS.ButtonClicked>
    </Fragment>
  );
};

export default ProductTypeButton;
