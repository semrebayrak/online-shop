import { useContext } from "react";
import BasketContext from "../../context/basketcontext.js";
import { BasketItemCSS } from "../../css/basket/basket.js";
import { ProductCSS } from "../../css/product/product";

export const BasketItem = ({ item }) => {
  const { basketLocal,basket, setBasket } = useContext(BasketContext);

  const addAmount = () => {
    let temp = [...basketLocal];
    temp[temp.indexOf(item)].quantity++;
    setBasket(temp);
  };

  const removeAmount = () => {
    let temp = [...basketLocal];
    if (temp[temp.indexOf(item)].quantity > 1) {
      temp[temp.indexOf(item)].quantity--;
    } else {
      temp.splice(temp.indexOf(item), 1);
    }
    setBasket(temp);
  };
  return (
    <BasketItemCSS.ItemContainer data-testid={"basket-item"} >
      <BasketItemCSS.ItemInfo>
        {item.name}
        <ProductCSS.Price>{item.price}</ProductCSS.Price>
      </BasketItemCSS.ItemInfo>
      <BasketItemCSS.CountOperations>
        <BasketItemCSS.ChangeAmount onClick={() => removeAmount()}>
          -
        </BasketItemCSS.ChangeAmount>
        <BasketItemCSS.Count>{item.quantity}</BasketItemCSS.Count>
        <BasketItemCSS.ChangeAmount onClick={() => addAmount()}>
          +
        </BasketItemCSS.ChangeAmount>
      </BasketItemCSS.CountOperations>
    </BasketItemCSS.ItemContainer>
  );
};

export default BasketItem;
