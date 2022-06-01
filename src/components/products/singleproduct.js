import { useContext } from "react";
import BasketContext from "../../context/basketcontext";
import { ProductCSS } from "../../css/product/product";

const SingleProduct = ({ product }) => {
  const { basket, setBasket, productTypes } = useContext(BasketContext);

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


  return (
    <ProductCSS.SinlgeProductContainer>
      <ProductCSS.ImageContainer>
        <ProductCSS.Image
          src="https://koctas-img.mncdn.com/mnresize/600/600/productimages/1000460503/1000460503_1_MC/8830702026802_1624880320071.jpg"
          alt={product.name}
        />
      </ProductCSS.ImageContainer>
      <ProductCSS.InfoContainer>
        <ProductCSS.Price>₺ {product.price}</ProductCSS.Price>
        <ProductCSS.TextInfo>{productName}</ProductCSS.TextInfo>
        <ProductCSS.TextInfo>{productType}</ProductCSS.TextInfo>

        <ProductCSS.Button
          onClick={() => {
            addToBasket();
          }}
        >
          Add
        </ProductCSS.Button>
      </ProductCSS.InfoContainer>
    </ProductCSS.SinlgeProductContainer>
  );
};

export default SingleProduct;
