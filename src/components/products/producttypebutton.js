import { Fragment } from "react";
import { ProductTypesCSS } from "../../css/product/product";

const ProductTypeButton = ({
  type,
  clicked,
  setSelectedType,
  index
 
}) => {

  const handleClick = () => {

    if(clicked==true)
    setSelectedType(null);
    else
    setSelectedType(index)
  }
 
  return (
    <Fragment>
      
        <ProductTypesCSS.ButtonClicked active={clicked} onClick={handleClick}>
          {type}
        </ProductTypesCSS.ButtonClicked>
      
      </Fragment>
  );
};

export default ProductTypeButton;
