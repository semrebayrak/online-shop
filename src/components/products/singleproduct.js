import { useContext } from "react";
import BasketContext from "../../context/basketcontext";
import { ProductCSS } from "../../css/product/product";

const SingleProduct = ({ product,index }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = () => {
    let tempBasket = [...basket];

    let foundIndex = tempBasket.findIndex((element) => element === product);
    if (foundIndex > -1) {
      tempBasket[foundIndex]["quantity"]++;
    } else {
      product["quantity"] = 1;
      tempBasket.push(product);
    }

    setBasket(tempBasket);
  };

  // Prepare product info
  
  var temp = product.name.split(" ");
  var productType = temp[temp.length - 1];
  temp.pop();
  var productName = temp.join(" ");
  if(productName?.length> 20){
    productName = productName.substring(0,20)+"...";
  }

  return (
    <ProductCSS.SingleProductContainer>
      <ProductCSS.ImageContainer>
        <ProductCSS.Image
          src="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000460503/1000460503_1_MC/8830702026802_1624880320071.jpg"
          alt={product.name}
        />
      </ProductCSS.ImageContainer>
      <ProductCSS.InfoContainer>
        <ProductCSS.Price data-testid={"product-price-" + index}>₺ {product.price}</ProductCSS.Price>
        <ProductCSS.TextInfo>{productName}</ProductCSS.TextInfo>
        <ProductCSS.TextInfo>{productType}</ProductCSS.TextInfo>

        <ProductCSS.Button data-testid={"add-to-basket-" + index}
          onClick={() => {
            addToBasket();
          }}
        >
          Add
        </ProductCSS.Button >
      </ProductCSS.InfoContainer>
    </ProductCSS.SingleProductContainer>
  );
};

export default SingleProduct;
