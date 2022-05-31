import { useContext } from "react";
import BasketContext from "../../context/basketcontext";
import { ProductCSS } from "../../css/product/product";

const SingleProduct = ({ product }) => {
  const { basket, setBasket } = useContext(BasketContext);

  const addToBasket = () => {
  
    let tempBasket = [...basket];


    let foundIndex = tempBasket.findIndex((element) => element===product);
    if (foundIndex>-1) {
      tempBasket[foundIndex]["quantity"]++;
    } else {
      product["quantity"] = 1;
      tempBasket.push(product);
    }

   
    setBasket(tempBasket);
  };

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
        <ProductCSS.TextInfo>{product.name}</ProductCSS.TextInfo>
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
